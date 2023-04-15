const Router = require("express").Router;
module.exports = Router({ mergeParams: true }).post(
  "/v1/users",
  async (req, res, next) => {
    try {
      //   const users = await req.db.User.find();
      //   res.send(users);
      console.log("req.db.Users => ", req.db.Users);
      console.log("req.body => ", req.body);
      res.send("Hello World Users=> ");
    } catch (error) {
      next(error);
    }
  }
);
