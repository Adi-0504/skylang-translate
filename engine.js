function convert(input){

  if(!validateInput(input)){
    return "INVALID INPUT";
  }

  const syllables = syllabify(input);

  let output = [];

  for(let s of syllables){

    let score = scoreSyllable(s);

    let glyph = glyphMap[s[0]] || "?";

    // tone rule
    if(score > 0.6){
      glyph = glyph + "̇";
    }

    output.push(glyph);
  }

  return output.join(" ");
}