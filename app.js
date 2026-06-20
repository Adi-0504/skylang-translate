let phoneticBuffer = "";

function process(){

  const input = document.getElementById("inputBox").value;

  const result = convert(input);

  document.getElementById("output").innerText = result.glyph;

  phoneticBuffer = result.phonetic;
}

function speak(){

  if(!phoneticBuffer) return;

  speakText(phoneticBuffer);
}