const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static())

app.get("/", (req, res) => {
    res.send("Hii I am a Awesome");
})

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})