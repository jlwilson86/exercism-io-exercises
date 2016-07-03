module.exports = function(year) {
  function isLeap() {
    if (year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0) {
      return false;
    }
    return year % 4 === 0;
  }

  return {
    isLeap: isLeap
  };
};
