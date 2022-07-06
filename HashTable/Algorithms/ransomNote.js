function checkMagazine(magazine, note) {
    const magazineHashMap = {};

    magazine.forEach(element => magazineHashMap[element] = element);

    if (note.every(element => {
      if (magazineHashMap[element] !== undefined) {
        delete magazineHashMap[element];
        return true;
      } else {
        return false;
      }
      })
    ) {
      return 'Yes';
    } else {
      return 'No'
    }
}

const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
const note = ['two', 'times', 'is', 'four'];

console.log(checkMagazine(magazine, note));

