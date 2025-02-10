"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeModule = void 0;
var constant_1 = require("./constant");
var validator_1 = require("./utils/validator");
var YoutubeModule = (function () {
    function YoutubeModule(id, includes_translate) {
        if (includes_translate === void 0) { includes_translate = false; }
        this.id = id;
        this.includes_translate = includes_translate;
    }
    YoutubeModule.getAvailableCaptionList = function (id, includes_translate) {
        var _a;
        if (includes_translate === void 0) { includes_translate = false; }
        try {
            var p = org.jsoup.Jsoup.connect(constant_1.YoutubeUrl + id)
                .userAgent(constant_1.YoutubeHeader['User-Agent'])
                .get()
                .html();
            p = p.split('"captions":')[1].split(',"videoDetails"')[0];
            var res = JSON.parse(p);
            var captionList = res.playerCaptionsTracklistRenderer.captionTracks;
            var langCode = res.playerCaptionsTracklistRenderer.translationLanguages;
            var langCodeKeyV = {};
            var langResCode = [];
            for (var _i = 0, langCode_1 = langCode; _i < langCode_1.length; _i++) {
                var i = langCode_1[_i];
                langCodeKeyV[i.languageCode] = i.languageName.simpleText;
                langResCode.push({
                    code: i.languageCode,
                    text: i.languageName.simpleText,
                });
            }
            var returnRes = {
                available_lang: [],
                caption: {
                    generated_caption_list: [],
                    uploader_caption_list: [],
                },
            };
            for (var _b = 0, captionList_1 = captionList; _b < captionList_1.length; _b++) {
                var i = captionList_1[_b];
                var resObj = {
                    is_translatable: i.isTranslatable,
                    lang: {
                        code: i.languageCode,
                        text: (_a = langCodeKeyV[i.languageCode]) !== null && _a !== void 0 ? _a : i.name.simpleText,
                    },
                    is_auto_generated: i.kind === 'asr',
                    url: i.baseUrl + '&fmt=json3',
                    translated_caption_list: [],
                };
                if (i.isTranslatable && includes_translate) {
                    for (var _c = 0, langCode_2 = langCode; _c < langCode_2.length; _c++) {
                        var j = langCode_2[_c];
                        resObj.translated_caption_list.push({
                            is_auto_generated: true,
                            is_translatable: false,
                            lang: {
                                code: j.languageCode,
                                text: j.languageName.simpleText,
                            },
                            url: i.baseUrl + '&tlang=' + j.languageCode + '&fmt=json3',
                        });
                    }
                }
                if (i.kind === 'asr') {
                    returnRes.caption.generated_caption_list.push(resObj);
                }
                else {
                    returnRes.caption.uploader_caption_list.push(resObj);
                }
            }
            if (includes_translate) {
                returnRes.available_lang = langResCode;
            }
            return returnRes;
        }
        catch (e) {
            throw new Error('유튜브 영상이 아니거나 잘못된 주소입니다');
        }
    };
    YoutubeModule.prototype.getAvailableCaptionList = function (includes_translate) {
        var _a;
        if (includes_translate === void 0) { includes_translate = false; }
        return YoutubeModule.getAvailableCaptionList(this.id, (_a = this.includes_translate) !== null && _a !== void 0 ? _a : includes_translate);
    };
    YoutubeModule.getCaption = function (url) {
        var _a, _b, _c;
        try {
            var p = org.jsoup.Jsoup.connect(url + '&fmt=json3')
                .userAgent(constant_1.YoutubeHeader['User-Agent'])
                .ignoreContentType(true)
                .method(org.jsoup.Connection.Method.GET)
                .execute()
                .body();
            var commentComponents = JSON.parse(p);
            var returnRes = { caption_list: [], rawText: '' };
            var textList = [];
            for (var _i = 0, _d = commentComponents.events; _i < _d.length; _i++) {
                var i = _d[_i];
                if (Array.isArray(i.segs)) {
                    for (var _e = 0, _f = i.segs; _e < _f.length; _e++) {
                        var j = _f[_e];
                        returnRes.caption_list.push({
                            duration_ms: (_a = i.dDurationMs) !== null && _a !== void 0 ? _a : null,
                            start_at_ms: (_b = i.tStartMs) !== null && _b !== void 0 ? _b : null,
                            text: (_c = j.utf8) !== null && _c !== void 0 ? _c : '',
                        });
                        textList.push(j.utf8);
                    }
                }
            }
            returnRes.rawText = textList.join('\n\n');
            return returnRes;
        }
        catch (e) {
            throw new Error('유효하지 않은 자막 주소입니다.');
        }
    };
    YoutubeModule.getCaptionByUrl = function (url) {
        return YoutubeModule.getCaption(url);
    };
    YoutubeModule.getCaptionByJson = function (json) {
        if (!(0, validator_1.check_json)(json)) {
            throw new Error('json구조가 올바르지 않습니다.');
        }
        return YoutubeModule.getCaption(json.url);
    };
    return YoutubeModule;
}());
exports.YoutubeModule = YoutubeModule;
