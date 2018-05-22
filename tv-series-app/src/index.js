import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker.js';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
