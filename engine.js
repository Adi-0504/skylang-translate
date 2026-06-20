function convert(input){

  const chars = input.replace(/\s+/g, "").split("");

  let glyphs = [];
  let syllables = [];

  for(let c of chars){
    glyphs.push(glyphMap[c] || c);
    syllables.push(c);
  }

  return {
    glyph: glyphs.join(""),
    phonetic: syllables.join(" ")
  };
}