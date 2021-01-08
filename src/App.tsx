import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppProvider } from './contexts/AppContext';
import { MapProvider } from './contexts/MapContext';

import AppShell from "./components/AppShell";
import MapSyncPage from "./pages/MapSync"
import SettingsPage from "./pages/Settings"


export default function App() {
  return (
    <Router>
      <AppProvider>
        <AppShell>
          <MapProvider>

              <Switch>

                <Route exact path="/settings">
                  <SettingsPage />
                </Route>          

                <Route path="/">
                  <MapSyncPage />
                </Route>

              </Switch>
        
          </MapProvider>
        </AppShell>
      </AppProvider>
    </Router>
  );
}
