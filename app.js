let phoneticBuffer = "";
let glyphBuffer = "";

const ui = {};

function cacheUI(){
  ui.input = document.getElementById("inputBox");
  ui.output = document.getElementById("output");
  ui.phonetic = document.getElementById("phoneticOutput");
  ui.status = document.getElementById("statusText");
  ui.validation = document.getElementById("validationText");
  ui.inputCount = document.getElementById("inputCount");
  ui.score = document.getElementById("scoreBadge");
  ui.convert = document.getElementById("convertBtn");
  ui.clear = document.getElementById("clearBtn");
  ui.copy = document.getElementById("copyBtn");
  ui.speak = document.getElementById("speakBtn");
  ui.lang = document.getElementById("langSelect");
}

function setStatus(message, type = ""){
  ui.status.textContent = message;
  ui.status.className = `status-text${type ? ` is-${type}` : ""}`;
}

function setValidation(message, type = ""){
  ui.validation.textContent = message;
  ui.validation.className = type ? `is-${type}` : "";
}

function updateCount(){
  const length = ui.input.value.replace(/\s+/g, "").length;
  ui.inputCount.textContent = `${length} ${t("characters")}`;
}

function updateButtons(){
  ui.copy.disabled = !glyphBuffer;
  ui.speak.disabled = !phoneticBuffer;
}

function renderUI(){
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  ui.input.placeholder = t("placeholder");
  ui.lang.value = lang;
  updateCount();

  if(!ui.input.value.trim()){
    setStatus(t("ready"));
  }
}

function resetOutput(){
  phoneticBuffer = "";
  glyphBuffer = "";
  ui.output.textContent = "";
  ui.phonetic.textContent = "";
  ui.score.textContent = "0%";
  setValidation("", "");
  updateButtons();
}

function processInput(){
  const input = ui.input.value || "";
  const trimmed = input.trim();

  updateCount();

  if(!trimmed){
    resetOutput();
    setStatus(t("ready"));
    return;
  }

  if(!validateInput(trimmed)){
    resetOutput();
    setValidation(t("invalid"), "error");
    setStatus(t("invalid"), "error");
    return;
  }

  const result = convert(trimmed);

  glyphBuffer = result.glyph || "";
  phoneticBuffer = result.phonetic || "";

  ui.output.textContent = glyphBuffer;
  ui.phonetic.textContent = phoneticBuffer;
  ui.score.textContent = `${Math.round((result.score || 0) * 100)}%`;

  setValidation(t("valid"), "");
  setStatus(t("converted"), "success");
  updateButtons();
}

function clearInput(){
  ui.input.value = "";
  updateCount();
  resetOutput();
  setStatus(t("ready"));
  ui.input.focus();
}

async function copyOutput(){
  if(!glyphBuffer) return;

  try{
    await navigator.clipboard.writeText(glyphBuffer);
    setStatus(t("copied"), "success");
  }catch(_err){
    setStatus(t("copyFailed"), "error");
  }
}

function speak(){
  if(!phoneticBuffer){
    setStatus(t("noSpeech"), "error");
    return;
  }

  speakText(phoneticBuffer);
  setStatus(t("speaking"), "success");
}

function bindEvents(){
  ui.convert.addEventListener("click", processInput);
  ui.clear.addEventListener("click", clearInput);
  ui.copy.addEventListener("click", copyOutput);
  ui.speak.addEventListener("click", speak);
  ui.input.addEventListener("input", processInput);
  ui.lang.addEventListener("change", event => setLang(event.target.value));

  document.querySelectorAll("[data-sample]").forEach(button => {
    button.addEventListener("click", () => {
      ui.input.value = button.dataset.sample;
      processInput();
      ui.input.focus();
    });
  });
}

function initApp(){
  cacheUI();
  bindEvents();
  renderUI();
  resetOutput();
  setStatus(t("ready"));
}

if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", initApp);
}else{
  initApp();
}

window.process = processInput;
window.speak = speak;
