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
      <p>
          <button type="button">
           Re-Check Maps
          </button>
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
<div className="h-screen flex overflow-hidden bg-white">


{/* Static sidebar for desktop */}
<div className=" lg:flex lg:flex-shrink-0">
  <div className="flex flex-col w-64">
    {/* Sidebar component, swap this element with another sidebar if you like */}
    <div className="flex flex-col h-0 flex-1">
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 text-white">
        <img className="h-8 w-auto" src="https://stats.playt2.com/logo512.png" alt="T2 Map Manager" />  <span className="text-cyan-100 ml-1">Map Manager</span>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <div className="space-y-1">
            {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
            <a href="/" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
              {/* Heroicon name: home */}
              <svg className="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
          </div>
          <div className="mt-10">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Settings
            </p>
            <div className="mt-2 space-y-1">
              <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                <span className="truncate">
                  Tribes 2
                </span>
              </a>


            </div>
          </div>
        </nav>

        {/* T2 MM version/update status */}
        <div className="flex-shrink-0 flex border-t border-gray-700 bg-gray-800 p-4">
          <p className="text-xs font-medium text-gray-500 ">
                  v0.0.1
           </p>
        </div>

      </div>
    </div>
  </div>
</div>
<div className="flex flex-col w-0 flex-1 overflow-hidden">
  {/* shell head */}
  <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <div className="flex-1 min-w-0">
      <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        Home
      </h1>
    </div>
    <div className="mt-4 flex sm:mt-0 sm:ml-4">

      <button type="button" className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
        Sync
      </button>
    </div>
  </div>

  {/* main body */}
  <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={-1}>

    {/* Sync Status */}
    <div className="px-4 mt-6 sm:px-6 lg:px-8">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Sync Status</h2>
      <ul className="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-4 xl:grid-cols-4 mt-3">
        <li  className="relative col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-lg font-medium rounded-l-md">
           3
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
                Missing
              </a>
              <p className="text-gray-500">Maps</p>
            </div>
          </div>
        </li>
        <li className="relative col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-500 text-white text-lg font-medium rounded-l-md">
           1
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
                Stale
              </a>
              <p className="text-gray-500">Map</p>
            </div>
          </div>
        </li>
      <li className="relative col-span-1 flex shadow-sm rounded-md">

          <div className="flex-1 flex items-center justify-between border border-gray-200 bg-white ">
            <div className="flex-1 px-4 py-2 text-sm text-center truncate">
              <span className="text-gray-500 font-medium ">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </li>
        <li className="relative col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-500 text-white text-lg font-medium rounded-l-md">
           2
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md ">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
                Archives to
              </a>
              <p className="text-gray-500">Sync</p>
            </div>
          </div>
        </li>
      </ul>
    </div>


    {/* Map Sync List (Out of Date ) */}
    <div className="mt-8 sm:block">
      <div className="align-middle inline-block min-w-full border-b border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Map</span>
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                .Vl2
              </th>
              <th className="md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100" >
            <tr>
              <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                <div className="flex items-center space-x-3 lg:pl-2">
                  <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true"></div>
                  <a href="/" className="truncate hover:text-gray-600">
                    <span>
                      Highest Small Octaine Crossing
                    </span>
                  </a>
                </div>
              </td>

              <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 text-xs leading-5 font-medium">HSOC.vl2</span>
                </div>
              </td>
              <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                  Missing
                </span>
              </td>
              <td className="pr-6">
                <div className="relative flex justify-end items-center">
                  <button id="project-options-menu-0" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    <svg className="w-5 h-5" data-todo-x-description="Heroicon name: dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                <div className="flex items-center space-x-3 lg:pl-2">
                  <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-yellow-500" aria-hidden="true"></div>
                  <a href="/" className="truncate hover:text-gray-600">
                    <span>
                      BaNsHee
                    </span>
                  </a>
                </div>
              </td>

              <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 text-xs leading-5 font-medium">BaNsHee.vl2</span>
                </div>
              </td>
              <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Stale
                </span>
              </td>
              <td className="pr-6">
                <div className="relative flex justify-end items-center">
                  <button id="project-options-menu-0" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    <svg className="w-5 h-5" data-todo-x-description="Heroicon name: dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </main>

  {/* Game Launcher */}
  <div className="flex-shrink-0 flex border-t border-gray-700 bg-gray-900 p-4">
    <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
    <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Launch Game
    </button>
    </div>
  </div>

</div>
</div>
  );
}
