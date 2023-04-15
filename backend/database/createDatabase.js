// const mongoose = require("mongoose");
const { Deta } = require("deta");
const glob = require("glob");
const path = require("path");
module.exports = ({ logger }) => {
  const url = process.env.MONGODB_URL;
  const db = glob
    .sync("./schemas/**/*.js", { cwd: __dirname })
    .map((filename) => {
      return {
        schema: require("./" + filename.replace("\\", "/")),
        name: path.basename(filename).replace(path.extname(filename), ""),
      };
    })
    .map(({ name, schema }) => {
      return { name, schema };
    })
    .reduce((db, model) => {
      return {
        ...db,
        [model.name]: model.schema,
      };
    }, {});
  console.log("db ==> ", db);
  // mongoose.connection
  //   .on("error", (error) => {
  //     throw error;
  //   })
  //   .once("open", () => logger.info(`MongoDB connected at ${url}`));
  return db;
};
