import React from 'react';
import './index.css';
import App from './App';
import {SpotifyStateProvider} from "../src/store/SpotifyStateProvider"
import reducer, { initialState } from "../src/store/reducer";




// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
  <SpotifyStateProvider initialState={initialState} reducer={reducer}>
  <App />
</SpotifyStateProvider>
</React.StrictMode>);