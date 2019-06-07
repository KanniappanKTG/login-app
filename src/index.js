import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import * as serviceWorker from './serviceWorker';

import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
