import React, {useContext} from "react";

import {IMapSyncConflicts, IMapSync} from "../types";
import { MapContext } from '../contexts/MapContext';

export default function SyncStatus({conflicts, archives}:IMapSyncConflicts) {
  const mapContext:IMapSync = useContext<any>(MapContext);

  const resync = () => mapContext.resyncMaps()

  return (
  <div className="px-4 mt-6 sm:px-6 lg:px-8">

    <div className="flex items-center justify-between">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Sync Status
      </h2>

      <button onClick={() => resync() }
       className="inline-flex items-center px-3 py-2 border border-gray-300  shadow-sm text-xs leading-4 font-medium rounded  text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Re-Sync
        <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      </button>
    </div>

    <ul className="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-4 xl:grid-cols-4 mt-3">
      <li className="relative col-span-1 flex shadow-sm rounded-md">
        <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-lg font-medium rounded-l-md">
          {conflicts.reduce((a, o) => (o.status === "missing" && a.push(o.value), a), []).length }
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <span className="text-gray-900 font-medium hover:text-gray-600"
            >
              Missing
            </span>
            <p className="text-gray-500 text-xs">Map(s)</p>
          </div>
        </div>
      </li>
      <li className="relative col-span-1 flex shadow-sm rounded-md">
        <div className="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-500 text-white text-lg font-medium rounded-l-md">
          {conflicts.reduce((a, o) => (o.status === "stale" && a.push(o.value), a), []).length }
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <span className="text-gray-900 font-medium hover:text-gray-600">
              Stale
            </span>
            <p className="text-gray-500 text-xs">Map(s)</p>
          </div>
        </div>
      </li>
      <li className="relative col-span-1 flex shadow-sm rounded-md">
        <div className="flex-1 flex items-center justify-between border border-gray-200 bg-white ">
          <div className="flex-1 px-4 py-2 text-sm text-center truncate">
            <span className="text-gray-500 font-medium ">
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </li>
      <li className="relative col-span-1 flex shadow-sm rounded-md">
        <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-500 text-white text-lg font-medium rounded-l-md">
          {archives.length}
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md ">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <span className="text-gray-900 font-medium hover:text-gray-600">
              Archive(s) to
            </span>
            <p className="text-gray-500">Sync</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  );
}
