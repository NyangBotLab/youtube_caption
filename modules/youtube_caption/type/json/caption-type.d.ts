export interface ICaptionJson {
    playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer;
}
export interface PlayerCaptionsTracklistRenderer {
    captionTracks: CaptionTrack[];
    audioTracks: AudioTrack[];
    translationLanguages: TranslationLanguage[];
    defaultAudioTrackIndex: number;
}
export interface CaptionTrack {
    baseUrl: string;
    name: Name;
    vssId: string;
    languageCode: string;
    isTranslatable: boolean;
    trackName: string;
    kind?: string;
}
export interface Name {
    simpleText: string;
}
export interface AudioTrack {
    captionTrackIndices: number[];
    defaultCaptionTrackIndex: number;
    visibility: string;
    hasDefaultTrack: boolean;
    captionsInitialState: string;
}
export interface TranslationLanguage {
    languageCode: string;
    languageName: LanguageName;
}
export interface LanguageName {
    simpleText: string;
}
