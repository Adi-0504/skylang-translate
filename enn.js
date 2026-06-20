function scoreSyllable(syllable){

  let score = 0;

  if(syllable.includes("a")) score += 1;
  if(syllable.includes("t")) score += 1;
  if(syllable.includes("m")) score += 1;

  return score / 3;
}