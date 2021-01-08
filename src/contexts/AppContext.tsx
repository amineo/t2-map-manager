import React, { createContext } from 'react';
const Store = require('electron-store');
 

const defaults = {
    config: {
        gamePath: 'C:/Dynamix/Tribes2',
        gameArgs: '-online'
    }
};

const _Store = new Store({defaults});
const AppContext = createContext({});
const { Provider } = AppContext;
//reset to defaults: _Store.reset('config') 

const AppProvider: React.FC = ({children}) => {
  return (
    <Provider value={{_store:_Store, config:_Store.get('config')}}>
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider };



//https://www.npmjs.com/package/electron-store
