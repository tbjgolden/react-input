export const validate = (
  value: string,
  validator?: RegExp | ((str: string) => boolean) | null,
) => {
  if (validator === undefined || validator === null) {
    return true;
  } else if (typeof validator === 'function') {
    return validator(value);
  } else {
    return validator.test(value);
  }
};

export const validateWithMask = (
  value: string,
  matchesMask: boolean,
  validator?: RegExp | ((str: string, matchesMask: boolean) => boolean) | null,
) => {
  if (validator === undefined || validator === null) {
    return true;
  } else if (typeof validator === 'function') {
    return validator(value, matchesMask);
  } else {
    return validator.test(value);
  }
};
