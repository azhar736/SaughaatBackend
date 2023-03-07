const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 9000;
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
dbConnection();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
