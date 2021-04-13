

const express = require("express");
const router = express.Router();

//routers
router.get("/", (request, response) => { 
    console.log("working");
});
module.exports = router;
