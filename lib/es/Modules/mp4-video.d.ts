/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */
import * as React from 'react';
export default class Mp4VideoPlayer extends React.Component<any, any> {
    private playerOption;
    onPlayerPlay(player: any): void;
    onPlayerPause(player: any): void;
    onPlayerEnded(player: any): void;
    onPlayerLoadeddata(player: any): void;
    onPlayerWaiting(player: any): void;
    onPlayerPlaying(player: any): void;
    onPlayerTimeupdate(player: any): void;
    onPlayerCanplay(player: any): void;
    onPlayerCanplaythrough(player: any): void;
    playerStateChanged(playerCurrentState: any): void;
    playerReadied(player: any): void;
    render(): JSX.Element;
}
