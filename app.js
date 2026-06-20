function process(){

  const input = document.getElementById("inputBox").value;

  const result = convert(input);

  document.getElementById("output").innerText = result;
}

function speak(){

  const text = document.getElementById("output").innerText;

  speakText(text);
}