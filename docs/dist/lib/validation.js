export const validate = (value, validator) => {
  if (validator === void 0 || validator === null) {
    return true;
  } else if (typeof validator === "function") {
    return validator(value);
  } else {
    return validator.test(value);
  }
};
