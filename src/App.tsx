import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppShell from "./components/AppShell";
import MapSyncPage from "./pages/MapSync"
import { MapCheck } from "./utils/MapCheck";

const Main = () => {
  const [badArchiveList, setBadArchiveList]: any[] = useState([]);
  const [localMissionList, setLocalMissionList]: any[] = useState([]);
  const [vl2ArchiveList, setVl2ArchiveList]: any[] = useState([]);
  const [reconcileDLMaps, setReconcileDLMaps]: any[] = useState([]);

  useEffect(() => {
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
      <p>
        <button type="button">Re-Check Maps</button>
      </p>
      <div>
        <hr />
        {/* <p>{JSON.stringify(badArchiveList)}</p>
        <p>{JSON.stringify(localMissionList)}</p>
        <p>{JSON.stringify(vl2ArchiveList)}</p> */}
        <p>{JSON.stringify(reconcileDLMaps)}</p>
      </div>
    </div>
  );
};

// export default function App() {
//   return (
//     <div className="flex flex-col h-screen">
//       <header className="py-5 bg-gray-700 text-white text-center">
//         T2 Map Manager
//       </header>

//       <main className="flex-1 overflow-y-auto p-5">
//         <Router>
//           <Switch>
//             <Route path="/" component={Main} />
//           </Switch>
//         </Router>
//         </main>
//     <footer className="py-5 bg-gray-700 text-center text-white">Footer</footer>
//   </div>

//   );
// }
export default function App() {
  return (
    <AppShell>
         <MapSyncPage title="Home" />
    </AppShell>
  );
}
