export default function buildSelections(countries, cur) {
  function shuffleArray(array) {
    /* Durstenfeld Shuffle */
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const selections = new Set([countries[cur]]);
  // fill with random countries
  while (selections.size < 5) {
    const random = Math.floor(Math.random() * countries.length);
    selections.add(countries[random]);
  }
  const selectionsArr = Array.from(selections);
  shuffleArray(selectionsArr);
  return selectionsArr;
}
