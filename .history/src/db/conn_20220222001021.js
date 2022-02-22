const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ajay", {
    useCreateIndex: false,
    useNewUrlParser: false,
    useUnifiedTopology: false
}).then(() => {
    console.log("connection successful");
}).catch