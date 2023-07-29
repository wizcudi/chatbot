// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3080;

const {handleChatRequest} = require("./api");

app.post("/chat", handleChatRequest);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

