// require
const express = require("express");
const userVerify = require("../../middlewares/auth/user.verify");
const paramsValidation = require("../../validation/shared/params.validation");
const testValidation = require("../../validation/test.validation");
const {addTest, getTest, updateTest, deleteTest} = require("../../controller/test.controller");

// router
const testRouter = express.Router();

// use
testRouter.use(userVerify);

// get
testRouter.get("/", getTest);

// post
testRouter.post("/", [testValidation], addTest);

// update
testRouter.put("/update/:id", [paramsValidation, testValidation], updateTest);

// delete
testRouter.delete("/delete/:id", [paramsValidation], deleteTest);

// export
module.exports = testRouter;
