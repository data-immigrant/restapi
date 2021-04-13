// require packages/libraries

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// global variables
const PORT = 3000;
// intialize express app
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//routers
app.use("/api/posts", require("./routers/posts"));

//listen to the server
app.listen(PORT,() => { console.log("mpho")}) 