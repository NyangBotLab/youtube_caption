export interface ICaptionParseRes {
    caption_list: {
        text: string;
        duration_ms: number;
        start_at_ms: number;
    }[];
    rawText: string;
}
