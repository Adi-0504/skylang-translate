function speakText(text){

  if(!text || typeof text !== "string"){
    return;
  }

  speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);

  utter.rate = 1;
  utter.pitch = 1;
  utter.lang = "en-US";

  speechSynthesis.speak(utter);
}