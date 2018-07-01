/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/7/01.
 */

import * as React from 'react';
import VideoPlayer from '../videoPlayer';

export default class HlsVideoPlayer extends React.Component<any, any> {
  private playerOption = {
    // videojs and plugin options
    height: '360',
    sources: [{
      withCredentials: false,
      type: "application/x-mpegURL",
      src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"
    }],
    controlBar: {
      timeDivider: false,
      durationDisplay: false
    },
    flash: {hls: {withCredentials: false}},
    html5: {hls: {withCredentials: false}},
    poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
  }

// or listen state event
  public playerStateChanged(playerCurrentState: any) {
    console.log('player current update state', playerCurrentState)
  }

// player is ready
  public playerReadied(player: any) {
    console.log('example 2 ready!', player)
    // player.hotkeys({
    //   volumeStep: 0.1,
    //   seekStep: 5,
    //   enableModifiersForNumbers: false,
    //   fullscreenKey: function (event: any, player) {
    //     // override fullscreen to trigger when pressing the F key or Ctrl+Enter
    //     return ((event.which === 70) || (event.ctrlKey && event.which === 13));
    //   }
    // })
  }

  render() {
    return (
      <div>

        <VideoPlayer
          option={this.playerOption}
          statechanged={this.playerStateChanged}
          ready={this.playerReadied}
        />
      </div>
    );
  }
}
