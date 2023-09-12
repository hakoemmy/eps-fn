class Logger {
  static warn(...warn) {
    console.warn(...warn)
  }
  static error(...error) {
    console.error(...error)
  }
  static info(...info) {
    console.info(...info)
  }
  static log(...info) {
    console.log("Error occurred:", ...info)
  }
}

export default Logger;
