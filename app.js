const express = require("express");
const cors = require("cors");
const baseRouter = require("./src/core/common/routerModuleMapper");
const initializeMongo = require("./src/repository/mongodb/mongooseClient");
const app = express();
const dotenv = require("dotenv").config();

app.use(
  cors({
    origin: [process.env.PORTAL_URL],
  })
);

app.use(express.json());

app.use("/", baseRouter);

app.listen(process.env.PORT || 3010, () => {
  initializeMongo();
  console.log("App is running on port 3010");
});
