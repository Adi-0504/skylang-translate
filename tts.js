function speakText(text){

  const utter = new SpeechSynthesisUtterance(text);

  utter.rate = 1;
  utter.pitch = 1;

  speechSynthesis.speak(utter);
}