const checkMinAndMax = (label, inputProps) => () => ({
  validator(_, value) {
    try {
      const { min, max } = inputProps;
      const isMinAvailable = min || min === 0;
      const isMaxAvailable = max || max === 0;

      const isMinValid = value < min;
      const isMaxValid = value > max;

      if (isMinAvailable && isMaxAvailable && (isMinValid || isMaxValid)) {
        return Promise.reject(
          new Error(
            `${label.toLowerCase()} should be between ${min} and ${max}`
          )
        );
      } else {
        if (isMinAvailable && isMinValid) {
          return Promise.reject(
            new Error(`${label.toLowerCase()} should be greater than ${min}`)
          );
        }
        if (isMaxAvailable && isMaxValid) {
          return Promise.reject(
            new Error(`${label.toLowerCase()} should be less than ${max}`)
          );
        }
      }

      return Promise.resolve();
    } catch (error) {
      return Promise.resolve();
    }
  },
});

export default checkMinAndMax;
