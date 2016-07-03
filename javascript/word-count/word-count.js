module.exports = function() {
  'use strict'

  let normaliseWhitespace = str => str.trim().replace(/\s+/, ' ')
  let toLowerCase = word => word.toLowerCase()

  let addToWordCount = (wordCount, word) => {
    wordCount[word] = (wordCount.hasOwnProperty(word) ? wordCount[word] : 0) + 1
    return wordCount
  }

  function count(phrase) {
    let allWords = normaliseWhitespace(phrase).split(' ')

    return allWords
      .map(toLowerCase)
      .reduce(addToWordCount, {})
  }

  return {
    count: count
  }
}
