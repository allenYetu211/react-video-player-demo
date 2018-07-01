import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/index';
import _vj from 'video.js';
window.videojs = _vj
import 'videojs-flash'
ReactDOM.render(<App />, document.getElementById('root'));
