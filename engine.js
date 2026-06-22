function convert(input){
  if(!input || typeof input !== "string"){
    return {
      glyph: "",
      phonetic: "",
      score: 0
    };
  }

  const clean = input.toLowerCase().replace(/\s+/g, "");
  const chars = clean.split("");
  const syllables = syllabify(clean);
  const neural = ENN();

  const glyph = chars.map(c => glyphMap[c] || c).join("");
  const score = syllables.length
    ? syllables.reduce((sum, syllable) => sum + neural.evaluate(syllable), 0) / syllables.length
    : 0;

  return {
    glyph,
    phonetic: syllables.join(" "),
    score
  };
}
