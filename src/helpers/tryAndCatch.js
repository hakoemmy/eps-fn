import Logger from "services/logger";

export const asyncTryAndCatch = async(cb, errorHandler) => {
  try {
    return await cb()
  } catch (error) {
    Logger.log(error)
    if(errorHandler) {
     return errorHandler(error)
    }
  }
};

export const tryAndCatch = (cb, errorHandler) => {
  try {
    return cb()
  } catch(error) {
    Logger.log(error)
    if(errorHandler) {
      return errorHandler(error)
    }
  }
}

export default tryAndCatch;
