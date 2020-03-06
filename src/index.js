import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Util from './util/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
