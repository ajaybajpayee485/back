const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email id")
            }
        }

    },
    name: {
        type: Number,
        required: true,
        min: 10
    },
    message: {
        name: {
            type: String,
            required: true,
            minLength: 3
        }

    })
