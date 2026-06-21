function convert(input){

  if(!input || typeof input !== "string"){
    return {
      glyph: "",
      phonetic: ""
    };
  }

  const clean = input.replace(/\s+/g, "");

  const chars = clean.split("");

  let glyphs = [];

  for(let c of chars){
    glyphs.push(glyphMap[c] || c);
  }

  const syllables = syllabify(clean);

  return {
    glyph: glyphs.join(""),
    phonetic: syllables.join(" ")
  };
}