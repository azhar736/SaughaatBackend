const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 9000;
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
const hallRoutes = require("./routes/hallRoutes");
const entertainerRoutes = require("./routes/entertainerRoutes");
dbConnection();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);
app.use(hallRoutes);
app.use(entertainerRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
