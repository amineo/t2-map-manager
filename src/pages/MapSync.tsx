import React, { useContext}  from "react";
import SyncMapList from "../components/SyncMapList";
import SyncStatus from "../components/SyncStatus";

import { MapContext } from '../contexts/MapContext';
// import { MapCheck } from '../utils/MapCheck';


// type Props = {
//   title: string,
//   children?: JSX.Element | JSX.Element[];
// }

type MC = {
  badArchiveList?: string[],
  localMissionList?: any[],
  reconcileDLMaps?: {
    missing: any[],
    stale: any[],
    unique: any[]
  },
  vl2ArchiveList?: string[],
  isLoading: boolean
}

export default function MapSyncPage (){
  const mapContext = useContext<MC>(MapContext);


  console.log(mapContext);

  return (

    <main
      className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
      tabIndex={-1}
    >
      { mapContext.isLoading ?
        <div>Loading</div>
      : <>
        <SyncStatus conflicts={mapContext.reconcileDLMaps}/>
        <SyncMapList />
      </>
     }
    </main>
  );
};
