export interface ICaptionParseRes {
    caption_list: {
        text: string;
        duration_ms: number | null;
        start_at_ms: number | null;
    }[];
    raw_text: string;
}
