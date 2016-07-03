module.exports = function() {
  'use strict';

  function hey(opener) {
    let silence = !opener.trim();
    let shouting = (opener.toUpperCase() === opener && opener.toLowerCase() !== opener);
    let question = (opener.endsWith('?'));

    if (silence) {
      return 'Fine. Be that way!';
    }

    if (shouting) {
      return 'Whoa, chill out!';
    }

    if (question) {
      return 'Sure.';
    }

    return 'Whatever.';
  }

  return {
    hey: hey
  }
}
