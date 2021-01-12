const fs = require('fs');
const path = require('path');
const readline = require('readline');
const StreamZip = require('node-stream-zip');

const fetch = require('node-fetch');

// .mis file vars
// DisplayName = The Map Name
// MissionTypes = CTF
// Version = 1






const vl2ArchiveList = [];
const localMissionList = [];
const badArchiveList = [];
const mapDiffs = {
    conflicts: [],
    archives: []
};

function compileVl2ArchiveList(GameDataDIR) {
  fs.readdirSync(GameDataDIR).forEach(archive => {
      const archivePath = path.join(GameDataDIR, archive);
      const ext = path.parse(archive).ext;

      if (fs.statSync(archivePath).isDirectory()){
          return compileVl2ArchiveList(archivePath);
      }
      else if ( ext === '.vl2'){
          return vl2ArchiveList.push(archivePath);
      }
  });
}



function processArchives(archive) {
    return new Promise((resolve, reject) => {
        const zip = new StreamZip({
            file: archive,
            storeEntries: true
        })

       const missionsList = [];

        zip.on('error', err => {
          console.error(`Something is strange with this archive: ${archive} - ${err}`);
            badArchiveList.push(archive)
            // Dont reject via promise or everything haults. We want to keep track of broken archives
            // reject(`Something is strange with this archive: ${archive} - ${err}`);
            resolve()
        });

        zip.on('entry', async entry => {
            if (entry.name.startsWith('missions/') && !entry.isDirectory && entry.name.includes('.mis')){
                //console.log(`Entry: ${entry.name}`);
                missionsList.push(entry.name)
            };
        });

        zip.on('ready', async () => {
            // !! The on Ready event runs **AFTER** all entries have been processed
            //console.log(`Ready: ${archive}`);

            for (const mission of missionsList) {
                await pLine(mission, zip, archive);
            }

            //console.log(`Done: ${archive}`);

            zip.close();
            resolve();
        });

    });
};





async function pLine(mission, zip, archive){

    return new Promise((resolve, reject) => {

        zip.stream(mission, (err, stm) => {
            if(err){
                console.error(archive, mission, err)
            }

            let _map = {
                name: mission.split('\\').pop().split('/').pop(),
                displayname: '',
                missiontypes: '',
                version: 0,
                filepath: mission,
                archive: archive
            }


            const rline = readline.createInterface({
                input: stm,
                terminal: false
            });



            rline.on('line',  function(line){
                if (_map.displayname !== '' & _map.missiontypes !== ''){
                    rline.close();
                    rline.removeAllListeners();

                }else if(line !== '' && line.includes('=') && line.includes('//') ){
                    // console.log(line);
                    // dismiss empty lines
                    let parsedLine = line.replace('//', '').trim().split('=');
                    let key = parsedLine[0].toLowerCase().trim();
                    let val = parsedLine[1].toString().trim();

                    //console.log(key, val);

                    _map[key] = val;
                }

            });



            rline.on('close', () => {
                // final round of formatting
                // Use mission name as fallback for display name (may or may not need this -- unsure yet)
                if(_map.displayname === ''){
                    _map.displayname = _map.name.replace('.mis','');
                }
                // Turn mission types into an array
                _map.missiontypes = _map.missiontypes.split(' ')

                //  console.log(_map);
                localMissionList.push(_map);

                // done with this file
                resolve();
            })

            rline.on('error', err => {
                console.error(`[RLINE] Something is strange with this archive: ${archive} - ${err}`);
            });


            stm.on('error', err => {
                console.error(`[STREAM] Something is strange with this archive: ${archive} - ${err}`);
            });



        });
    });
};



async function mapDiffCheck(){
  // console.log('--------');
  // console.log('Checking local map index against servers list');
  // const remoteMapList = require('./servermaps.json');

  const endpoint = 'https://enhkh9rit8f53ir.m.pipedream.net';

  try {

    const callRemoteMapAPI = async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        return json.serverMaps
      } catch (error) {
        console.error(error);
      }
    };

    const remoteMapList = await callRemoteMapAPI(endpoint);

    console.log('remoteMapList', remoteMapList);


    // find a list of maps that the server has but client does not
    const missingMaps = remoteMapList.filter(({ name: n1 }) =>
        !localMissionList.some(({ name: n2 }) => {
            return n2 === n1
        }
    )).map(m => ({...m, status: "missing" }))



    // find a list of maps that are out of date
    const mapVersionCheck = remoteMapList.filter(({ version: v1 }) =>
        !localMissionList.some(({ version: v2 }) => {
            return v2 === v1
        })
    ).filter( x => !missingMaps.filter( y => y.name === x.name).length ).map(m => ({...m, status: "stale" }))


    mapDiffs.conflicts.push(...missingMaps, ...mapVersionCheck);



    // TODO: Check conflict list against Bad Archive list and update status to 'error'
    // Map -> BaNsHee is a b0rked archive so we should use to test against


    // filter list of unique archives needed to be downloaded
    const uniqueArchives = mapDiffs.conflicts.filter((v,i,a) => a.findIndex(t => (t.archive === v.archive)) === i);
    mapDiffs.archives.push(...uniqueArchives);

   // console.log(JSON.stringify(mapDiffs));

  } catch {
    console.error('Error running mapDiffCheck');
  }
}

function debuglog(perfExecutionTime){
  // Check to make sure Async IO is respecting promises
  console.log('[ DEBUG LOG ]');
  console.log('Bad Archives', badArchiveList);
  console.log('Missions', localMissionList);
  console.log('async op complete');
  console.log('---------');
  console.log(`Working T2 GameData Path: ${dirPath}`);
  console.log(`Found ${localMissionList.length} missions in ${vl2ArchiveList.length} archives.`);
  console.log(`Found ${badArchiveList.length} bad archives.`);
  console.log(`Total processing time: ${perfExecutionTime}`);
}



export async function MapCheck(gamePath) {
  console.log('MapCheck GamePath', gamePath);
  // 'maps/' (For local testing folder )
  const dirPath = path.resolve(__dirname, gamePath);

    // Clean
    vl2ArchiveList.length = 0;
    localMissionList.length = 0;
    badArchiveList.length = 0;
    mapDiffs.conflicts.length = 0;
    mapDiffs.archives.length = 0;

    //let perfProfileStart = (new Date()).getTime();

    await compileVl2ArchiveList(dirPath);
   // console.log('Archives Found', vl2ArchiveList);

    for (const archive of vl2ArchiveList) {
        await processArchives(archive)
    }

    // let perfProfileEnd = (new Date()).getTime();
    // let perfExecutionTime = `${((perfProfileEnd - perfProfileStart)/1000) % 60} seconds`;


    await mapDiffCheck();

    //  debuglog(perfExecutionTime);

    return {
      badArchiveList,
      localMissionList,
      vl2ArchiveList,
      mapDiffs,
      isLoading: false
    };

};


// MapCheck().catch((e) => console.log(e));
