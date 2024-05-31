import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SpotifyStateProvider} from "../src/store/SpotifyStateProvider"
import reducer, { initialState } from "../src/store/reducer";

ReactDOM.render(
  <React.StrictMode>
      <SpotifyStateProvider initialState={initialState} reducer={reducer}>
      <App />
    </SpotifyStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);