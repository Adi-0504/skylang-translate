let phoneticBuffer = "";

function process(){

  const input = document.getElementById("inputBox").value || "";

  const result = convert(input);

  document.getElementById("output").innerText = result.glyph || "";

  phoneticBuffer = result.phonetic || "";
}

function speak(){

  if(!phoneticBuffer) return;

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(phoneticBuffer);

  u.lang = "en-US";
  u.rate = 1;
  u.pitch = 1;

  speechSynthesis.speak(u);
}