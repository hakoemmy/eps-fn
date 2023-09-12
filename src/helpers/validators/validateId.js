import mod10 from "mod10-check-digit";

import { idPattern } from "../../constants";

const checkSouthAfricaId = (identificationNumber) => {
  const regexCheck = idPattern.test(identificationNumber);

  return (
    regexCheck &&
    Number.parseInt(identificationNumber[identificationNumber.length - 1]) ===
      mod10(identificationNumber.slice(0, identificationNumber.length - 1))
  );
};

const validateId = (identification) => () => ({
  validator(_, value) {
    try {
      if (identification === "passport" || !value) {
        return Promise.resolve();
      }
      if (checkSouthAfricaId(value)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Invalid id number"));
    } catch (error) {
      return Promise.resolve();
    }
  },
});

export default validateId;
