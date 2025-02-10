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
    mhModeHint?: number;
    juJustifCode?: number;
    sdScrollDir?: number;
}
export interface WpWinPosition {
    apPoint?: number;
    ahHorPos?: number;
    avVerPos?: number;
    rcRows?: number;
    ccCols?: number;
}
export interface Event {
    tStartMs: number;
    dDurationMs?: number;
    id?: number;
    wpWinPosId?: number;
    wsWinStyleId?: number;
    wWinId?: number;
    segs?: Seg[];
    aAppend?: number;
}
export interface Seg {
    utf8: string;
    acAsrConf?: number;
    tOffsetMs?: number;
}
