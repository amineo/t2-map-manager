import React, { useContext } from 'react';

import { IAppContext } from '../types';
import { AppContext } from '../contexts/AppContext';

import { LaunchGame } from '../utils/Launcher';

export default function GameLauncher() {
	const appContext: IAppContext = useContext<any>(AppContext);

	return (
		<div className="flex-shrink-0 flex border-t border-gray-700 bg-gray-900 p-4">
			<div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
				<button
					type="button"
					className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					onClick={() => LaunchGame(appContext.config)}
				>
					Launch Game
				</button>
			</div>
		</div>
	);
}
