import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';



const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.register();
