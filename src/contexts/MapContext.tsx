import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

import { IAppContext } from '../types';
import { AppContext } from '../contexts/AppContext';

import { MapCheck } from '../utils/MapCheck';

const MapContext = createContext({});
const { Provider } = MapContext;

const MapProvider: React.FC = ({ children }) => {
	const appContext: IAppContext = useContext<any>(AppContext);
	const [ maps, setMaps ]: any[] = useState({ isLoading: true });

	console.log('mapcontext calling appContext', appContext);

	const runMapCheck = useCallback(
		async () => {
			try {
				const m = await MapCheck(appContext.config.gamePath);
				setMaps(m);
			} catch (err) {
				console.error(err);
			}
		},
		[ MapCheck ]
	);

	useEffect(
		() => {
			runMapCheck();
		},
		[ runMapCheck ]
	);

	return (
		<Provider
			value={{
				...maps
			}}
		>
			{children}
		</Provider>
	);
};

export { MapContext, MapProvider };
