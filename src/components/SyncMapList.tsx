import React from "react";


const MapRow = ({map}) => {

  let typeColor = (map.status === "missing") ? "pink" : "yellow";
  
  return (
    <tr key={map.name}>
    <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
      <div className="flex items-center space-x-3 lg:pl-2">
        <div
          className={`flex-shrink-0 w-2.5 h-2.5 rounded-full bg-${typeColor}-500`}
          aria-hidden="true"
        ></div>
        <a href="/" className="truncate hover:text-gray-600">
          <span>{map.displayname}</span>
        </a>
      </div>
    </td>

    <td className="px-6 py-3 text-sm text-gray-500 font-medium">
      <div className="flex items-center space-x-2">
        <span className="flex-shrink-0 text-xs leading-5 font-medium">
          {map.archive}
        </span>
      </div>
    </td>
    <td className="px-6 py-3 text-sm text-gray-400 font-medium">
      <div className="flex items-center space-x-2">
        <span className="flex-shrink-0 text-xs leading-5 font-medium">
          v{map.version}
        </span>
      </div>
    </td>
    <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${typeColor}-100 text-${typeColor}-800 capitalize`}>
        {map.status}
      </span>
    </td>
    <td className="pr-6">
      <div className="relative flex justify-end items-center">
        <button
          id="project-options-menu-0"
          className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <svg
            className="w-5 h-5"
            data-todo-x-description="Heroicon name: dots-vertical"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
      </div>
    </td>
  </tr>
  )
}





export default function SyncMapList({maps}) {

  return (

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
            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {
            maps.conflicts.map( (map, i) =>  <MapRow key={`${i}_${map.name}`} map={map}/>)
          }
        </tbody>
      </table>
    </div>
  </div>

  )
}
