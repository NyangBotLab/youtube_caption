import { ICaptionListRes, ICaptionUrl } from './type/res/ICaptionList';
import { ICaptionParseRes } from './type/res/ICaptionParseRes';
export declare class YoutubeModule {
    private readonly id;
    private readonly includes_translate;
    constructor(id: string, includes_translate?: boolean);
    static getAvailableCaptionList(id: string, includes_translate?: boolean): ICaptionListRes;
    getAvailableCaptionList(includes_translate?: boolean): ICaptionListRes;
    private static getCaption;
    static getCaptionByUrl(url: string): ICaptionParseRes;
    static getCaptionByJson(json: ICaptionUrl): ICaptionParseRes;
}
