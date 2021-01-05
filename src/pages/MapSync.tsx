import React from "react";
import SyncMapList from "../components/SyncMapList";
import SyncStatus from "../components/SyncStatus";



type Props = {
  title: string,
  children?: JSX.Element | JSX.Element[];
}


export default function MapSyncPage ({children}: Props){
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
