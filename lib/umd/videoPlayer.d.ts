/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */
import * as React from 'react';
export default class VideoPlayer extends React.Component<any, any> {
    private videoDom;
    private setVideoDom;
    private player;
    private globalOption;
    constructor(props: any);
    componentDidMount(): void;
    initPlayer(): void;
    emitPlayerState(event: any, value: any): void;
    render(): JSX.Element;
}
