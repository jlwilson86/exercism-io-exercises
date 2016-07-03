module.exports = function(word) {
  'use strict'

  let toLowerCase = str => str.toLowerCase()
  let isAlphabetical = ch => ch.match(/[a-z]/i)
  let isDuplicate = (item, index, arr) => (arr.indexOf(item) !== index)
  let hasDuplicates = arr => arr.find(isDuplicate) !== undefined;

  function isIsogram() {
    let normalisedChars = word.split('')
      .filter(isAlphabetical)
      .map(toLowerCase);

    return !hasDuplicates(normalisedChars);
  }

  return {
    isIsogram: isIsogram
  }
}
