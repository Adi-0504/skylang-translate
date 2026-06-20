function speakText(text){

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);

  speechSynthesis.speak(u);
}