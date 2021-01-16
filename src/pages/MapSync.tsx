import React, { useContext}  from "react";

import {IMapSync} from "../types";

import Loading from '../components/Loading';
import SyncStatus from "../components/SyncStatus";
import SyncMapList from "../components/SyncMapList";
import LocalMapList from "../components/LocalMapList";

import { MapContext } from '../contexts/MapContext';

// type Props = {
//   title: string,
//   children?: JSX.Element | JSX.Element[];
// }

export default function MapSyncPage (){
  const mapContext:IMapSync = useContext<any>(MapContext);
  console.log(mapContext);

  return (

    <main
      className={`flex-1 relative z-0 overflow-y-auto focus:outline-none ${mapContext.isLoading ? 'bg-gray-900': ''}`}
      tabIndex={-1}
    >
      { mapContext.isLoading ?
        <Loading />
      : <>
        <SyncStatus {...mapContext.mapDiffs} />
        <SyncMapList {...mapContext.mapDiffs} />
        <LocalMapList localMissionList={mapContext.localMissionList}/>
      </>
     }
    </main>
  );
};
