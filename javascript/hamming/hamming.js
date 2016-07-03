module.exports = function() {
  function compute(strand1, strand2) {
    if (strand1.length !== strand2.length) {
      throw 'DNA strands must be of equal length.';
    }

    return strand1.split('')
      .filter((char, index) => strand2.charAt(index) !== char)
      .length
  }

  return {
    compute: compute
  }
};
