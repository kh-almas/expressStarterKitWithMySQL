// require
const express = require("express");
const loginValidation = require("../../validation/auth/login.validation");
const userVerify = require("../../middlewares/auth/user.verify");
const login = require("../../controller/auth/login.controller");

// router
const authRouter = express.Router();

// post
authRouter.post("/login", [loginValidation], login);
authRouter.post("/verify", [userVerify], (req, res) => {
  return res.status(200).json({
    status: "ok",
    body: { message: "user verified", decoded: req.decoded },
  });
});

// export
module.exports = authRouter;
