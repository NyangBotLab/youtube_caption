export interface ICaptionParseRes {
    caption_list: {
        text: string;
        durationMs: number;
        startsAtMs: number;
    }[];
    rawText: string;
}
