require("dotenv").config();
const port = process.env.PORT;
console.log("Run 1");
const logger = require("./logger.js");
console.log("Run 2");
const database = require("./database/createDatabase.js")({ logger });
const app = require("./app/createExpressApp.js")({ logger, database });
const server = require("http").createServer();
server
  .on("request", app)
  .on("listening", function () {
    const addr = this.address();
    const bind =
      typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`);
  })
  .on("error", function (error) {
    if (error.syscall !== "listen") throw error;
    const addr = this.address() || { port };
    const bind =
      typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    switch (error.code) {
      case "EACCES":
        logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
      case "EADDRINUSE":
        logger.error(`${bind} is already in use`);
        process.exit(1);
      default:
        throw error;
    }
  })
  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
