import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MapProvider } from './contexts/MapContext';

import AppShell from "./components/AppShell";
import MapSyncPage from "./pages/MapSync"


export default function App() {
  return (
    <AppShell>
      <MapProvider>
        <Router>
          <Switch>

            <Route path="/">
              <MapSyncPage />
            </Route>

          </Switch>
        </Router>
      </MapProvider>
    </AppShell>
  );
}
