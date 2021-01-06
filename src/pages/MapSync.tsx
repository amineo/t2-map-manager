import React, { useContext, useEffect, useState }  from "react";
import SyncMapList from "../components/SyncMapList";
import SyncStatus from "../components/SyncStatus";

import { MapContext } from '../contexts/MapContext';
// import { MapCheck } from '../utils/MapCheck';


type Props = {
  title: string,
  children?: JSX.Element | JSX.Element[];
}


export default function MapSyncPage ({children}: Props){
  const mapContext = useContext(MapContext);


  console.log(mapContext);

  return (

    <main
      className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
      tabIndex={-1}
    >
      <SyncStatus />
      <SyncMapList />
    </main>
  );
};
