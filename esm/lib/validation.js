export const validate = (value, validator) => {
  if (validator === undefined || validator === null) {
    return true;
  } else if (typeof validator === 'function') {
    return validator(value);
  } else {
    return validator.test(value);
  }
};
export const validateWithMask = (value, matchesMask, validator) => {
  if (validator === undefined || validator === null) {
    return true;
  } else if (typeof validator === 'function') {
    return validator(value, matchesMask);
  } else {
    return validator.test(value);
  }
};
