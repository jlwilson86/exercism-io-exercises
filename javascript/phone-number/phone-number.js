'use strict';

const INVALID = '0000000000';

const clean = input => {
  let digits = input.replace(/[^\d]/g, '');

  if (digits.length === 11 && digits.startsWith(1)) {
    digits = digits.slice(1);
  }
  return digits;
};

const validate = digits => digits.length === 10;

function PhoneNumber(input) {
  this.digits = clean(input);
  this.isValid = validate(this.digits);
}

PhoneNumber.prototype.number = function() {
  return this.isValid ? this.digits : INVALID;
};

PhoneNumber.prototype.areaCode = function() {
  return this.digits.slice(0, 3); // TODO: What should we return for invalid numbers?
};

module.exports = PhoneNumber;
