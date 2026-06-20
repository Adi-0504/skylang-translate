const i18n = {
  en: {
    input: "Input",
    output: "Output",
    convert: "Convert",
    speak: "Speak"
  },

  zh: {
    input: "輸入",
    output: "輸出",
    convert: "轉換",
    speak: "朗讀"
  }
};

let lang = "zh";

function setLang(l){
  lang = l;
  renderUI();
}

function t(key){
  return i18n[lang][key];
}