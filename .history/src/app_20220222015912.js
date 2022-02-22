const express = require("express");
const path = require("path");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
//console.log(path.join(__dirname));
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})


app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})