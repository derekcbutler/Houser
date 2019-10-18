require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");
const app = express();

const { CONNECTION_STRING } = process.env;
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.get("/api/house", ctrl.getHouse);
app.post('/api/house', ctrl.addHouse);
// app.delete('/api/house', ctrl.deleteHouse);

app.listen(4000, () => console.log(`Server on port 4000`));
