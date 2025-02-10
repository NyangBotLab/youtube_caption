# 카카오톡 봇 유튜브 자막 크롤러

카카오톡 봇(라이노 자바스크립트)용 유튜브 자막을 크롤링하는 라이브러리입니다.

## 기능
- 유튜브 영상의 자막 목록 조회
- 자동 생성 자막 및 업로더가 업로드한 자막 지원
- 자막 텍스트 크롤링




## 사용 방법

### 자막 목록 조회
```javascript
// require
const YoutubeModule = require('youtube_caption');
```

```javascript
// 정적 메서드 사용
//뒤에 true면 자동 번역된 자막까지 가져옴
const captionList = YoutubeModule.getAvailableCaptionList('VIDEO_ID', true); // 번역 자막 포함

// 인스턴스 메서드 사용
// 두번째 인자의 기본값은 false;
const youtube = new YoutubeModule('VIDEO_ID');
//true를 넣으면 번역된 자막까지 가져오기
const captionList = youtube.getAvailableCaptionList();
```

### 자막 가져오기
```javascript
// url로 자막 가져오기
const caption = YoutubeModule.getCaptionByUrl('CAPTION_URL');

// getAvailableCaptionList 결과값(ICaptionUrl) 중 하나로 자막 가져오기
const caption = YoutubeModule.getCaptionByJson(captionUrlObject);
```

## 응답 타입

### ICaptionListRes
자막 목록 조회 응답
```typescript
interface ICaptionListRes {
    caption: {
        generated_caption_list: ICaptionUrlTranslator[]; // 자동 생성 자막
        uploader_caption_list: ICaptionUrlTranslator[];  // 업로더 자막
    };
    available_lang: ILangCode[]; // 사용 가능한 언어 목록
}

export interface ICaptionUrlTranslator {
    url: string;                // 자막 URL
    lang: ILangCode;            // 언어 정보
    is_translatable: boolean;   // 번역 가능 여부 
    is_auto_generated: boolean; // 자동 생성 여부
    translated_caption_list: ICaptionUrl[];     //번역된 자막 목록 두번째 인자가 true일 때만
}

export interface ICaptionUrl {
    url: string;                // 자막 URL
    lang: ILangCode;            // 언어 정보
    is_translatable: boolean;   // 번역 가능 여부 
    is_auto_generated: boolean; // 자동 생성 여부
}

interface ILangCode {
    code: string;  // 언어 코드 (예: 'ko', 'en')
    text: string;  // 언어명 (예: '한국어', 'English')
}

```
### ICaptionParseRes
자막 파서 응답
```typescript
interface ICaptionParseRes {
    caption_list: {
        text: string;         // 자막 텍스트
        duration_ms: number | null;   // 지속 시간(ms)
        start_at_ms: number | null;   // 시작 시간(ms)
    }[];
    rawText: string;         // 전체 자막 텍스트
}
```

## 라이선스
MIT License