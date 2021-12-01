const mongoose = require("mongoose");

const bankingSchema = new mongoose.Schema(
    {
        bank_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 20
        },
        acc_num: {
            type: String,
            trim: true,
            required: true,
            maxlength: 20
        },
        acc_type: {
            type: String,
            trim: true,
            required: true,
            maxlength: 20
        },
        branch_num: {
            type: String,
            trim: true,
            required: true,
            maxlength: 10
        },
        acc_holder: {
            type: String,
            trim: true,
            required: true,
            maxlength: 62
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Banking", bankingSchema);