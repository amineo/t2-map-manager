const fs = require('fs');
const path = require('path');
const readline = require('readline');
const StreamZip = require('node-stream-zip');

// .mis file vars
// DisplayName = The Map Name
// MissionTypes = CTF
// Version = 1
  

const dirPath = path.resolve(__dirname, 'maps/');
const vl2ArchiveList = [];
const localMissionList = [];
const badArchiveList = [];


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

        zip.on('entry', entry => {
            if (entry.name.startsWith('missions/') && !entry.isDirectory && entry.name.includes('.mis')){
                console.log(`Entry: ${entry.name}`);
                missionsList.push(entry.name)
            };
        });

        zip.on('ready', () => {
            // !! The on Ready event runs **AFTER** all entries have been processed
            console.log(`Ready: ${archive}`);

            missionsList.map( async mission => {
               // console.log('in map', mission);
                await pLine(zip, mission, archive)
            });
        
    
           console.log(`Done: ${archive}`);
           resolve();
        });
    });
};         


      


function pLine(zip, mission, archive){
    return new Promise((resolve, reject) => {

        zip.stream(mission, (err, stm) => {
            if(err){
                console.error(archive, mission, err)
            }

            let _map = {
                displayname:'',
                missiontypes: '',
                version: 0,
                filepath: mission,
                archive: archive
            }

            let rline = readline.createInterface({
                input: stm,
                terminal: false
            });
            
            rline.on('line',  function(line){
                // Abort parsing if we his mission quotes for speed
                if (_map.displayname !== '' & _map.missiontypes !== ''){
                  rline.close();
                  rline.removeAllListeners();

                }else if(line !== '' && line.includes('=') && line.includes('//') ){
                   // console.log(line);
                    // dismiss empty lines
                    line = line.replace('//', '').trim().split('=')

                   // console.log(line[0], line[1]);

                    _map[line[0].toLowerCase().trim()] = line[1].toString().trim();
                }
                
            });



            rline.on('close', () => {
              //  console.log(_map);
              localMissionList.push(_map)
             })

             rline.on('error', err => { 
               console.error(`[RLINE] Something is strange with this archive: ${archive} - ${err}`);
             });
 
 
             stm.on('end', () => {
                zip.close()
                resolve();
             });

             stm.on('error', err => { 
               console.error(`[STREAM] Something is strange with this archive: ${archive} - ${err}`);
             });

        });

    });
}




async function main() {
    let perfProfileStart = (new Date()).getTime();

    await compileVl2ArchiveList(dirPath);
    console.log('Archives Found', vl2ArchiveList);

    for (const archive of vl2ArchiveList) {
        await processArchives(archive) 
    }

    let perfProfileEnd = (new Date()).getTime();
    let perfExecutionTime = `${((perfProfileEnd - perfProfileStart)/1000) % 60} seconds`;

    debuglog(perfExecutionTime);
}
  


function debuglog(perfExecutionTime){
    // Check to make sure Async IO is respecting promises
    console.log('Bad Archives', badArchiveList);
    console.log('Missions', localMissionList);
    console.log('async op complete');
    console.log('---------');
    console.log(`Working T2 GameData Path: ${dirPath}`);
    console.log(`Found ${localMissionList.length} missions in ${vl2ArchiveList.length} archives.`);
    console.log(`Found ${badArchiveList.length} bad archives.`);
    console.log(`Total processing time: ${perfExecutionTime}`);

  }


main().catch((e) => console.log(e));
