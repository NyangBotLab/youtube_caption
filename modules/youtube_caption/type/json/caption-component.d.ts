export interface ICaptionComponent {
    wireMagic: string;
    pens: Pen[];
    wsWinStyles: WsWinStyle[];
    wpWinPositions: WpWinPosition[];
    events: Event[];
}
export interface Pen {
}
export interface WsWinStyle {
}
export interface WpWinPosition {
}
export interface Event {
    tStartMs: number;
    dDurationMs: number;
    segs: Seg[];
}
export interface Seg {
    utf8: string;
}
