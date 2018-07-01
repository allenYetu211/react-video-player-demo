/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */

import * as React from 'react';
import VideoPlayer from '../videoPlayer';
// import 'videojs-flash'
// import 'videojs-hotkeys'

export default class FlashVideoPlayer extends React.Component<any, any> {
  private playerOption = {

    height: '360',
    sources: [{
      type: 'video/x-flv',
      src: 'http://fms.cntv.lxdns.com/live/flv/channel96.flv'
    }],
    controlBar: {
      timeDivider: false,
      durationDisplay: false
    },
    techOrder: ['flash', 'html5'],
    sourceOrder: true,
    flash: {
      hls: {withCredentials: false},
    },
    html5: {hls: {withCredentials: false}},
    poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-6.jpg"
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
