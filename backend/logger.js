const { createLogger, transports } = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      name: "debug-file",
      filename: "log.json",
      level: "debug",
      handleExceptions: true,
      humanReadableUnhandledException: true,
      exitOnError: true,
      json: false,
      maxsize: 104857600,
      maxFiles: 5,
    }),
    new transports.Console({
      name: "error-console",
      level: "error",
      handleExceptions: true,
      humanReadableUnhandledException: true,
      exitOnError: true,
    }),
  ],
});
// logger.add(logger.transports.File, {
//   name: "debug-file",
//   filename: "log.log",
//   level: "debug",
//   handleExceptions: true,
//   humanReadableUnhandledException: true,
//   exitOnError: true,
//   json: false,
//   maxsize: 104857600,
//   maxFiles: 5,
// });
// logger.add(logger.transports.Console, {
//   name: "error-console",
//   level: "error",
//   handleExceptions: true,
//   humanReadableUnhandledException: true,
//   exitOnError: true,
// });

module.exports = logger;
