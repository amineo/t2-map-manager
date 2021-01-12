import React, { createContext, useCallback, useEffect, useState } from 'react';
const Store = require('electron-store');

export const defaults = {
	config: {
		gamePath: 'C:/Dynamix/Tribes2',
		gameArgs: '-online'
	}
};

const _Store = new Store(defaults);
const AppContext = createContext({});
const { Provider } = AppContext;
//reset to defaults: _Store.reset('config')
//_Store.reset('config');
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

//https://www.npmjs.com/package/electron-store
