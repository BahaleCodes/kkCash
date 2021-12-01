const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            trim: true
        },
        duration: {
            type: String,
            trim: true,
            required: true,
            maxlength: 10
        },
        repay_date: {
            type: String,
            trim: true,
            required: true,
            maxlength: 20
        },
        interest_rate: {
            type: String,
            maxlength: 10,
            required: true
        },
        approved: {
            type: Boolean,
            required: true,
            default: false
        },
        state: {
            type: String,
            required: true,
            maxlength: 10
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Loan", loanSchema);