const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {

    }
})
