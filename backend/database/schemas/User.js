require("dotenv").config();

const { Deta } = require("deta");

console.log("key => ", process.env.PROJECT_KEY);

const deta = Deta(process.env.PROJECT_KEY);

const userSchema = deta.Base("users");

userSchema.schema = {
  username: String,
  password: String,
};

userSchema.methods = {};
userSchema.methods.sayHello = function () {
  return `This is a shared function: ${this.username}`;
};
module.exports = userSchema;
