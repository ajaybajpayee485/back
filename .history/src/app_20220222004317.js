const express = require("express");
const path = require("path");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.
    app.use(express.static())

app.get("/", (req, res) => {
    res.send("Hii I am a Awesome");
})

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})