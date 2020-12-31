import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {MapCheck} from './utils/MapCheck';

const Main = () => {
  const [badArchiveList, setBadArchiveList]: any[] = useState([]);
  const [localMissionList, setLocalMissionList]: any[] = useState([]);
  const [vl2ArchiveList, setVl2ArchiveList]: any[] = useState([]);
  const [reconcileDLMaps, setReconcileDLMaps]: any[] = useState([]);

  useEffect(  () => {
    MapCheck().then((m) => {
      // console.log(data);
      setBadArchiveList(m.badArchiveList);
      setLocalMissionList(m.localMissionList);
      setVl2ArchiveList(m.vl2ArchiveList);
      setReconcileDLMaps(m.reconcileDLMaps);
    });

    //  const m = await MapCheck();
    //   setBadArchiveList(m.badArchiveList);
    //   setLocalMissionList(m.localMissionList);
    //   setVl2ArchiveList(m.vl2ArchiveList);
    //   setReconcileDLMaps(m.reconcileDLMaps);


  }, [MapCheck]);


  return (
    <div>
      <div className="bg-gray-500 p-5 text-center">Tailwind</div>
      <h1>T2 Map Managers</h1>
      <div className="Hello">
          <button type="button">
           Re-Check Maps
          </button>
      </div>
      <div>
      <hr />
        <p>{JSON.stringify(badArchiveList)}</p>
        <p>{JSON.stringify(localMissionList)}</p>
        <p>{JSON.stringify(vl2ArchiveList)}</p>
        <p>{JSON.stringify(reconcileDLMaps)}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
