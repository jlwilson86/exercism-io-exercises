module.exports = function(phrase) {
  'use strict'

  const NUMBER_OF_LETTERS_IN_ALPHABET = 26

  let toLowerCase = str => str.toLowerCase()
  let isAlphabetic = ch => ch.match(/[a-z]/i)
  let dedupe = arr => arr.filter((item, index, arr) => arr.indexOf(item) === index)

  function isPangram() {
    let lowercasedLetters = phrase.split('').filter(isAlphabetic).map(toLowerCase)
    let uniqueLetters = dedupe(lowercasedLetters)

    return uniqueLetters.length === NUMBER_OF_LETTERS_IN_ALPHABET
  }

  return {
    isPangram: isPangram
  }
}
