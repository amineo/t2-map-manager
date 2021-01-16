import React, { createContext, useState } from 'react';
const Store = require('electron-store');


// Default config options
export const defaults = {
	config: {
		gamePath: 'C:/Dynamix/Tribes2',
		gameArgs: '-online'
	}
};

const _Store = new Store(defaults);
// A little safety net for if some reason the default config store does not exist
// or if it was deleted manually in %APPDATA%; reset using default config options above
if (!_Store.get("config")) {
  _Store.reset("config");
  _Store.set(defaults);
}

// Setup AppContext
const AppContext = createContext({});
const { Provider } = AppContext;

const AppProvider: React.FC = ({ children }) => {
	// Need to set config as state here so appContext refreshes
	const [ config, setConfig ] = useState({ config: _Store.get('config') });

	// const getStoredConfig: any = useCallback(
	// 	() => {
	// 		console.log('callback');
	// 		setConfig({ config: _Store.get('config') });
	// 		console.log(config);
	// 	},
	// 	[ _Store ]
	// );

	// useEffect(
	// 	() => {
	// 		console.log('effect');
	// 		getStoredConfig();
	// 	},
	// 	[ getStoredConfig ]
	// );

	const _saveData = (data: any) => {
		console.log('Saving data');
		// console.log('data to save', data);
		// console.log('before store', _Store.get('config'));
		// console.log('save to store', { config: data });
		_Store.set({ config: data });

		//console.log('save to state', { config: _Store.get('config') });

		setConfig({ config: _Store.get('config') });
		//	console.log('data', data);
	};

	const _resetDefaults = () => {
		console.log('Resetting to defaults');

		_Store.reset('config');
		_Store.set(defaults);

		setConfig({ config: _Store.get('config') });
		// console.log('back to default store', _Store.get('config'));
		// console.log('default config', config);
	};

	return (
		<Provider
			value={{
				saveData: (data: any) => _saveData(data),
				resetData: _resetDefaults,
				...config
			}}
		>
			{children}
		</Provider>
	);
};

export { AppContext, AppProvider };
