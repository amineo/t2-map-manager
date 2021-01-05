import React from "react";
import SideBar from "./SideBar";
import GameLauncher from "./GameLauncher";


type Props = {
   children: JSX.Element | JSX.Element[];
}


export default function AppShell ({children}: Props){
  return (
  <div className="h-screen flex overflow-hidden bg-white">
    <SideBar/>
  <div className="flex flex-col w-0 flex-1 overflow-hidden">

    { children }

    <GameLauncher />
  </div>
</div>
)};
