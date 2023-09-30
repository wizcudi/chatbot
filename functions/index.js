
// /CHATBOT/functions/index.js
const functions = require("firebase-functions");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { handleChatRequest } = require("./chatbot");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", handleChatRequest);

exports.api = functions.https.onRequest(app);



// /CHATBOT/functions/index.js (local)
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const { handleChatRequest } = require("./chatbot");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const port = 3080;

// app.post("/chat", handleChatRequest);


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });