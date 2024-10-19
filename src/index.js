const express = require("express");
const bodyparser = require("body-parser");
const ApiRoutes = require("./routes/index.js")
const setupandstartserver = async () => {
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.use("/", ApiRoutes);

  app.listen(3000, async () => {
    console.log(`SERVER STARTED AT PORT 3000`);
  });
};

setupandstartserver();
