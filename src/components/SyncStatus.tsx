import React from "react";

export default function SyncStatus(){
  return(
    <div className="px-4 mt-6 sm:px-6 lg:px-8">
    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
      Sync Status
    </h2>
    <ul className="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-4 xl:grid-cols-4 mt-3">
      <li className="relative col-span-1 flex shadow-sm rounded-md">
        <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-lg font-medium rounded-l-md">
          3
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a
              href="/"
              className="text-gray-900 font-medium hover:text-gray-600"
            >
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
            <a
              href="/"
              className="text-gray-900 font-medium hover:text-gray-600"
            >
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
          2
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md ">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a
              href="/"
              className="text-gray-900 font-medium hover:text-gray-600"
            >
              Archives to
            </a>
            <p className="text-gray-500">Sync</p>
          </div>
        </div>
      </li>
    </ul>
  </div>

  );
}
