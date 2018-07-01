import * as React from 'react';
import 'video.js/dist/video-js.css';
import './index.scss';

import Mp4VideoPlayer from './Modules/mp4-video'
import FlashVideoPlayer from './Modules/flash-video'
import HlsVideoPlayer from './Modules/hls-video'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Mp4VideoPlayer/>
        <FlashVideoPlayer/>
        <HlsVideoPlayer/>
      </div>
    );
  }
}
