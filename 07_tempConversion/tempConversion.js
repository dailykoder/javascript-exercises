const ftoc = function(temp) {
  let celsius = ((temp - 32.0) * 5/9);
  return Math.round(celsius * 10)/10;
};

const ctof = function(temp) {
  let faren = ((temp * 9/5) + 32.0);
  return Math.round(faren * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
