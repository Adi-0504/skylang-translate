function syllabify(input){

  const tokens = input.trim().split(/\s+/);

  let result = [];

  for(let t of tokens){

    let c = t[0];
    let v = t[1];

    if(!c || !v) continue;

    result.push(c + v);
  }

  return result;
}