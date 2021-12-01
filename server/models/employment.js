const mongoose = require("mongoose");

const employmentSchema = new mongoose.Schema(
    {
        emp_status: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        gross_income: {
            type: String,
            required: true
        },
        net_income: {
            type: String,
            required: true
        },
        income_frequency: {
            type: String,
            tring: true,
            required: true,
            maxlength: 32
        },
        salary_day: {
            type: String,
            required: true,
            trim: true,
            maxlength: 20
        },
        work_number: {
            type: String,
            trim: true,
            required: false,
            maxlength: 10
        },
        university: {
            type: String,
            required: false,
            maxlength: 52,
            trim: true
        },
        academic_year: {
            type: String,
            trim: true,
            required: false,
            maxlength: 7
        },
        course_duration: {
            type: String,
            required: false,
            trim: true,
            maxlength: 8
        },
        division: {
            type: String,
            required: false,
            trim: true,
            maxlength: 52
        },
        service_time: {
            type: String,
            required: false,
            maxlength: 8,
            trim: true
        },
        emp_type: {
            type: String,
            trim: true,
            required: false,
            maxlength: 20
        },
        employer_name: {
            type: String,
            trim: true,
            required: false,
            maxlength: 52
        },
        emp_industry: {
            type: String,
            trim: true,
            required: false,
            maxlength: 40
        },
        emp_position: {
            type: String,
            trim: true,
            required: false,
            maxlength: 40
        },
        time_with_employer: {
            type: String,
            trim: true,
            required: false,
            maxlength: 8
        },
        emp_duration: {
            type: String,
            trim: true,
            required: false,
            maxlength: 20
        } 
    }
)

module.exports = mongoose.model("Employment", employmentSchema);