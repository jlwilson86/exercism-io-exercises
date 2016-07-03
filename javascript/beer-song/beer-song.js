module.exports = function() {
  'use strict'

  const SPECIAL_VERSE_MAP = {
    0: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
    1: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
    2: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
  };

  function sing(fromVerse, toVerse) {
    var verses = [], v = fromVerse;

    while (v >= (toVerse || 0)) {
      verses.push(verse(v--));
    }

    return verses.join('\n');
  }

  function verse(num) {
    const regularVerse = `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
    return SPECIAL_VERSE_MAP[num] || regularVerse;
  }

  return {
    verse: verse,
    sing: sing
  };
};
