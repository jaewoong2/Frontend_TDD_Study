const sum = (a, b) => {
  return a + b;
};

const person = (name, age) => {
  return {
    name,
    age,
  };
};

const toggle = (bool) => !bool;

const range = (start, end) => {
  return new Array(end - start + 1).fill(0).map((_, i) => i + 1);
};

module.exports = {
  sum,
  person,
  toggle,
  range,
};
