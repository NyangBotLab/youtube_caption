export interface ICaptionListRes {
    caption: ICaptionList;
    available_lang: ILangCode[];
}
export interface ICaptionUrlTranslator extends ICaptionUrl {
    translated_caption_list: ICaptionUrl[];
}
export interface ICaptionUrl {
    url: string;
    lang: ILangCode;
    is_translatable: boolean;
    is_auto_generated: boolean;
}
interface ICaptionList {
    generated_caption_list: ICaptionUrlTranslator[];
    uploader_caption_list: ICaptionUrlTranslator[];
}
export interface ILangCode {
    code: string;
    text: string;
}
export {};
