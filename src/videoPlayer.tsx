/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */

import * as React from 'react';
import _vj from 'video.js';

const defaultEvents = [
  'loadeddata',
  'canplay',
  'canplaythrough',
  'play',
  'pause',
  'waiting',
  'playing',
  'ended',
  'error',
];
// interface IProps {
//   option?: any;
//   events?: any[];
//   play?: object;
//   pause?: object;
//   ended?: object;
//   loadeddata?: object;
//   waiting?: object;
//   playing?: object;
//   timeupdate?: object;
//   canplay?: object;
//   canplaythrough?: object;
//   statechanged?: object;
//   ready?: object;
// }
console.log('_vj', _vj)
const videojs = _vj
export default class VideoPlayer extends React.Component<any, any> {
  private videoDom: any;
  private setVideoDom: any;
  private player: any;

  private globalOption: any = {
    controls: true,
    errorDisplay: false,
    preload: 'auto',
    controlBar: {
      remainingTimeDisplay: false,
      playToggle: {},
      progressControl: {},
      fullscreenToggle: {},
      volumeMenuButton: {
        inline: false,
        vertical: true
      }
    },
    techOrder: ['html5'],
    plugins: {}
  }

  constructor(props: any) {
    super(props)
    this.setVideoDom =  (element: any) => {
      this.videoDom = element
    }
  }

  componentDidMount() {
    this.globalOption = Object.assign(this.globalOption, this.props.option)
    console.log('globalOption', this.globalOption)
    this.initPlayer();
  }

  public initPlayer() {
    const self:any = this
    this.player = videojs(this.videoDom, this.globalOption, function (this: any) {
      const events = defaultEvents.concat(self.props.events || [])
      for (let i = 0; i < events.length; i++) {
        this.on(events[i], () => {
          self.emitPlayerState(events[i], true)
        })
      }

      this.on('timeupdate', function (this: any) {
        self.emitPlayerState('timeupdate', this.currentTime())
      })
      self.props.ready(this);
    });
  }

  public emitPlayerState(event: any, value: any) {
    if (event && !!this.props[event]) {
      this.props[event](this.player);
    }
    if (value) {
      this.props.statechanged({[event]: value});
    }
  }


  render() {
    return (
      <div>
        <video className="video-js" ref={this.setVideoDom}></video>
      </div>
    );
  }
}
