function round(n, p) {
  return Math.round(n * 10**p) / 10**p;
}

const ftoc = function(f) {
  return round((f-32) * .5555, 1);
};

const ctof = function(c) {
  return round(c / .5555 + 32, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
