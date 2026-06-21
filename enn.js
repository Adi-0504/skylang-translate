function ENN(){

  return {
    evaluate: function(syllable){

      if(!syllable || typeof syllable !== "string"){
        return 0;
      }

      let score = 0;

      const vowels = ["a", "e", "i", "o", "u"];
      const consonants = ["t", "m", "n", "w", "r"];

      for(let v of vowels){
        if(syllable.includes(v)) score += 0.2;
      }

      for(let c of consonants){
        if(syllable.includes(c)) score += 0.1;
      }

      if(syllable.length === 2) score += 0.2;

      if(score > 1) score = 1;

      return score;
    }
  };
}