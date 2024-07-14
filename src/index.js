import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

if (process.env.REACT_APP_NODE_ENV === 'production') {
    console.log("disable dev tools");
    disableReactDevTools();
  }

const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.register();
