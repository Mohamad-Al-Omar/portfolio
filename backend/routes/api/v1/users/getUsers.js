const Router = require("express").Router;
module.exports = Router({ mergeParams: true }).get(
  "/v1/users",
  async (req, res, next) => {
    try {
      //   const users = await req.db.User.find();
      //   res.send(users);
      console.log("dddddddd => ", req.db.Users);
      res.send("Hello World Users=> ");
    } catch (error) {
      next(error);
    }
  }
);
