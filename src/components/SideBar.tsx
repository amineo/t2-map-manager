import React from "react";

import {NavLink} from 'react-router-dom';


export default function SideBar() {
  return (
    <div className="flex flex-shrink-0">
    <div className="flex flex-col w-64">
      <div className="flex flex-col h-0 flex-1">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 text-white">
          <img
            className="h-8 w-auto"
            src="https://stats.playt2.com/logo512.png"
            alt="T2 Map Manager"
          />{" "}
          <span className="text-cyan-100 ml-1">Map Manager</span>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            <div className="space-y-1">
              {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
              <NavLink
                to="/"
                exact
                activeClassName="bg-gray-900"
                className=" hover:bg-gray-700 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md "
              >
                {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
                {/* Heroicon name: home */}
                <svg
                  className="text-gray-300 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </NavLink>
              

            </div>
            <div className="mt-10">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Settings
              </p>
              <div className="mt-2 space-y-1">
                <NavLink
                  to="/settings"
                  activeClassName="bg-gray-900"
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
                >
                  <span className="truncate">Tribes 2</span>
                </NavLink>
              </div>
            </div>
          </nav>

          {/* T2 MM version/update status */}
          <div className="flex-shrink-0 flex border-t border-gray-700 bg-gray-800 p-4">
            <p className="text-xs font-medium text-gray-500 ">v0.0.1</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}
