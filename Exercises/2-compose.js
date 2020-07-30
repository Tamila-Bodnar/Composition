'use strict';

const compose = (...fns) => {
  const handErrors = [];
  const findError = x => {
    if (fns.length === 0) return x;
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      for (const handError of handErrors) {
        handError(error);
      }
    }
  };
  findError.on = (name, handError) => {
    if (name === 'error') handErrors.push(handError);
  };
  return findError;
};

module.exports = { compose };
