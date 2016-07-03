module.exports = function(startDate) {
  var ONE_BILLION_SECONDS_IN_MILLIS = Math.pow(10, 9) * 1000;

  function date() {
    return new Date(startDate.getTime() + ONE_BILLION_SECONDS_IN_MILLIS);
  }

  return {
    date: date
  }
};
