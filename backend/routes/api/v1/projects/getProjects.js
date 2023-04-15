const Router = require("express").Router;
module.exports = Router({ mergeParams: true }).get(
  "/v1/projects",
  async (req, res, next) => {
    try {
      //   const users = await req.db.User.find();
      //   res.send(users);
      console.log("dddddddd => ", req.db.Projects);
      res.send("Hello World Projects => ");
    } catch (error) {
      next(error);
    }
  }
);
