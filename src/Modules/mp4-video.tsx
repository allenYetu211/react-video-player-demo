/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */

import * as React from 'react';
import VideoPlayer from '../videoPlayer';

export default class Mp4VideoPlayer extends React.Component<any, any> {
  private playerOption = {
    height: '360',
    autoplay: true,
    muted: true,
    language: 'en',
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [{
      type: "video/mp4",
      // mp4
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      // webm
      // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
    }],
    poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
  }

  public onPlayerPlay(player: any) {
    // console.log('player play!', player)
  }
  public onPlayerPause(player: any) {
    // console.log('player pause!', player)
  }
  public onPlayerEnded(player: any) {
    // console.log('player ended!', player)
  }
  public onPlayerLoadeddata(player: any) {
    // console.log('player Loadeddata!', player)
  }
  public onPlayerWaiting(player: any) {
    // console.log('player Waiting!', player)
  }
  public onPlayerPlaying(player: any) {
    // console.log('player Playing!', player)
  }
  public onPlayerTimeupdate(player: any) {
    // console.log('player Timeupdate!', player.currentTime())
  }
  public onPlayerCanplay(player: any) {
    // console.log('player Canplay!', player)
  }
  public onPlayerCanplaythrough(player: any) {
    // console.log('player Canplaythrough!', player)
  }
  // or listen state event
  public playerStateChanged(playerCurrentState: any) {
    // console.log('player current update state', playerCurrentState)
  }
  // player is ready
  public playerReadied(player: any) {
    // seek to 10s
    // console.log('example player 1 readied', player)
    // player.currentTime(10)
    // console.log('example 01: the player is readied', player)
  }

    render() {
      return (
        <div>

          <VideoPlayer
            option={this.playerOption}
            play={this.onPlayerPlay}
            pause={this.onPlayerPause}
            ended={this.onPlayerEnded}
            loadeddata={this.onPlayerLoadeddata}
            waiting={this.onPlayerWaiting}
            playing={this.onPlayerPlaying}
            timeupdate={this.onPlayerTimeupdate}
            canplay={this.onPlayerCanplay}
            canplaythrough={this.onPlayerCanplaythrough}
            statechanged={this.playerStateChanged}
            ready={this.playerReadied}
          />
        </div>
      );
    }
  }
