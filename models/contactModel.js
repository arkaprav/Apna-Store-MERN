const mongoose = require("mongoose");

const contactModel = mongoose.Schema({
        name:{
            type: String,
            required: [true, "Name is required"]
        },
        mobile:{
            type: String,
            required: [true, "Mobile is required"]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactModel);