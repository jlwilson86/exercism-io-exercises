module.exports = function() {
  var DNA_TO_RNA_MAP = {
    'A': 'U',
    'G': 'C',
    'C': 'G',
    'T': 'A'
  };

  function toRna(dna) {
    return dna.split('')
      .map(nucleotide => DNA_TO_RNA_MAP[nucleotide])
      .join('');
  }

  return {
    toRna: toRna
  }
};
