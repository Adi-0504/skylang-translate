const i18n = {
  en: {
    language: "Language",
    inputEyebrow: "Source",
    inputTitle: "Input",
    outputEyebrow: "Result",
    outputTitle: "Output",
    glyphLabel: "Glyphs",
    phoneticLabel: "Phonetic",
    clear: "Clear",
    convert: "Convert",
    copy: "Copy",
    speak: "Speak",
    placeholder: "ta wa mu ru",
    characters: "chars",
    ready: "Ready",
    invalid: "Use latin letters and spaces only; common English words are blocked.",
    valid: "Input accepted",
    converted: "Converted",
    copied: "Copied",
    copyFailed: "Copy failed",
    noSpeech: "No phonetic output yet",
    speaking: "Speaking"
  },

  zh: {
    language: "語言",
    inputEyebrow: "Source",
    inputTitle: "輸入",
    outputEyebrow: "Result",
    outputTitle: "輸出",
    glyphLabel: "字形",
    phoneticLabel: "發音",
    clear: "清除",
    convert: "轉換",
    copy: "複製",
    speak: "朗讀",
    placeholder: "ta wa mu ru",
    characters: "字元",
    ready: "就緒",
    invalid: "只能使用拉丁字母與空格，常見英文單字會被擋下。",
    valid: "輸入有效",
    converted: "已轉換",
    copied: "已複製",
    copyFailed: "複製失敗",
    noSpeech: "目前沒有可朗讀內容",
    speaking: "朗讀中"
  }
};

let lang = "zh";

function setLang(l){
  lang = i18n[l] ? l : "zh";
  renderUI();
}

function t(key){
  return i18n[lang]?.[key] || i18n.en[key] || key;
}
