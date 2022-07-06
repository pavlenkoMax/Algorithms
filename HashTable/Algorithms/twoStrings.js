function twoStrings(s1, s2) {
  const hashMap = new Map();
  let counter = 2;

  const longWord = s1.length > s2.length ? s1 : s2;
  const shortWord = s1.length > s2.length ? s2 : s1;

  for (let i = 0; i < longWord.length; i++) {
    const el = longWord[i];
    hashMap.set(el, hashMap.get(el) ? (hashMap.get(el) + 1) : 1);
  }

  for (let i = 0; i < shortWord.length; i++) {
    const el = shortWord[i];
    
    if (hashMap.get(el)) { 
      hashMap.set(el, hashMap.get(el) - 1);
      counter -= 1;

      if (counter === 0) {
        return 'YES';
      }
    }
  }

  if (counter > 0) {
    return 'NO';
  } else if (counter === 0) {
    return 'YES';
  }
}

const a = 'aardvark';
const b = 'apple';

console.log(twoStrings(a, b));