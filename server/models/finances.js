const mongoose = require("mongoose");

const financesSchema = new mongoose.Schema(
    {
        monthly_rates: {
            type: String,
            required: true
        },
        groceries: {
            type: String,
            required: true
        },
        commuting_costs: {
            type: String,
            required: true
        },
        loan_repayments: {
            type: String,
            required: true
        },
        child_maintenance: {
            type: String,
            required: true
        },
        desp_income: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("Finances", financesSchema);