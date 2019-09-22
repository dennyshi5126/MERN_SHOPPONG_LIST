const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
//const cors = require("cors");

const app = express();

//app.use(cors());
//body-parser Middleware
app.use(bodyParser.json());

//connect to Mongo db
const db = require("./config/keys").mongoDB;
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("mongoDB connnected"))
  .catch(err => console.log(err));

//use routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening to port: ${port}`));
