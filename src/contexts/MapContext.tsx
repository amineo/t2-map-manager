import React, { createContext, useEffect, useState, useCallback } from 'react';

import { MapCheck } from '../utils/MapCheck';

const MapContext = createContext({});
const { Provider } = MapContext;

const MapProvider: React.FC = ({children}) => {

  const [badArchiveList, setBadArchiveList]: any[] = useState([]);
  const [localMissionList, setLocalMissionList]: any[] = useState([]);
  const [vl2ArchiveList, setVl2ArchiveList]: any[] = useState([]);
  const [reconcileDLMaps, setReconcileDLMaps]: any[] = useState([]);


	const runMapCheck = useCallback(
		async () => {
			try {
      const m = await MapCheck();
        setBadArchiveList(m.badArchiveList);
        setLocalMissionList(m.localMissionList);
        setVl2ArchiveList(m.vl2ArchiveList);
        setReconcileDLMaps(m.reconcileDLMaps);
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
    <Provider value={{
      badArchiveList,
      localMissionList,
      vl2ArchiveList,
      reconcileDLMaps
    }}>
      {children}
    </Provider>
  );
};

export { MapContext, MapProvider };
