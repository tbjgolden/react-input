export const validate = (value: string, validator?: RegExp | ((str: string) => boolean)) => {
  if (typeof validator === 'undefined') {
    return true
  } else if (typeof validator === 'function') {
    return validator(value)
  } else {
    return validator.test(value)
  }
}
