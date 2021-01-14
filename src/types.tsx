export interface IMapDetail {
	status: string;
	name: string;
	displayname: string;
	archive: string;
	version: string;
}

export interface IMapSyncConflicts {
	conflicts: any[];
	archives: any[];
}

export interface IMap {
	map: IMapDetail;
}

export interface IMapSync {
	resyncMaps: any;
	badArchiveList?: string[];
	localMissionList?: IMap;
	mapDiffs: IMapSyncConflicts;
	vl2ArchiveList?: string[];
	isLoading: boolean;
}

export interface IMapContext {}

export interface IAppContext {
	_store: any;
	saveData: any;
	resetData: any;
	config: {
		gamePath: string;
		gameArgs: string;
	};
}
