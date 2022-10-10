import { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'videos.js' {
    // this tells the type system that the VideoJsPlayer object has a method seekButtons
    export interface VideoJsPlayer {
        seekButtons(options: VideoJsSeekButtonsOptions): void;
    }
    // this tells the type system that the VideoJsPlayer initializer can have options for plugin seekButtons
    export interface VideoJsPlayerPluginOptions {
        seekButtons?: VideoJsSeekButtonsOptions;
    }
}

export interface VideoJsSeekButtonsOptions {
    forward?: number;
    back?: number;
}