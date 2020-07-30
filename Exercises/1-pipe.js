'use strict';

const pipe = (...fns) => {
  for (const arg of fns) {
    if (typeof arg !== 'function') {
      throw new Error('not functions or digits');
    }
  }
  return x => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };
