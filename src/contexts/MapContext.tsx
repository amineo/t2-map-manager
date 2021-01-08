import React, { createContext, useEffect, useState, useCallback } from 'react';

import { MapCheck } from '../utils/MapCheck';

const MapContext = createContext({});
const { Provider } = MapContext;

const MapProvider: React.FC = ({children}) => {
  const [maps, setMaps]: any[] = useState({isLoading:true});

	const runMapCheck = useCallback(
		async () => {
			try {
        const m = await MapCheck();
        setMaps(m);
			} catch (err) {
				console.error(err);
			}
		},
		[ MapCheck ]
	);

  useEffect(() => {
    runMapCheck()
  }, [runMapCheck]);


  return (
    <Provider value={{...maps
    }}>
      {children}
    </Provider>
  );
};

export { MapContext, MapProvider };