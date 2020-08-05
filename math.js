var euler = Math.E;
var phi = Math.SQRT2;
var pi = Math.PI;
var tau = Math.TAU;
var sin = (p, mode = "rad") => {
  if (mode == "deg") {
    return Math.sin((p / tau) * 360);
  } else {
    return Math.sin(p);
  }
};
var cos = (p, mode = "rad") => {
  if (mode == "deg") {
    return Math.cos((p / tau) * 360);
  } else {
    return Math.cos(p);
  }
};
var random = (min, max, floor) => {
  if (floor == 1) {
    return Math.floor(Math.random() * max + min);
  } else {
    return Math.random() * max + min;
  }
};
(t => {
  [
    "round",
    "sqrt",
    "abs",
    "ceil",
    "floor",
    "min",
    "max",
    "cbrt",
    "sinh",
    "cosh",
    "acos",
    "asin",
    "tan",
    "tanh"
  ].forEach(n => {
    t[n] = Math[n];
  });
})(this);
