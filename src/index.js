import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import 'react-fontawesome';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
