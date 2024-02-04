// require
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

// app
const app = express();
const testRouter = require("./routes/example-route/test.route");

// use
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '200mb'}));
app.use(bodyParser.json());

//public path for show image
app.use(express.static('./uploads'));
const path = require('path');
const authRouter = require("./routes/auth/auth.route");
const absolutePath = path.join(__dirname, 'uploads');
app.use('/test/show/file', express.static(absolutePath));


// resource controller
app.use("/auth", authRouter);
app.use("/test", testRouter);


// get
app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: "ok", body: { message: "app is running" } });
});

// export
module.exports = app;
