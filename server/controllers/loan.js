const Loan = require('../models/loan');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.loanById = (req, res, next, id) => {
    Loan.findById(id).exec((err, loan) => {
        if (err || !loan) {
            return res.status(400).json({
                error: 'ERROR! Loan details not found'
            });
        }
        req.loan = loan;
        next();
    });
};
exports.create = (req, res) => {
    const loan = new Loan(req.body);
    loan.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};
exports.read = (req, res) => {
    return res.json(req.loan);
};
exports.update = (req, res) => {
    const loan = req.loan;
    if (!loan.amount){
        return res.status(400).json({
            error: "Loan amount is required!"
        });
    } else {
        loan.amount = req.body.amount;
    }
    if (!loan.duration){
        return res.status(400).json({
            error: "Loan duration is required!"
        });
    } else {
        loan.duration = req.body.duration;
    }
    if (!loan.repay_date){
        return res.status(400).json({
            error: "Repay Date is required!"
        });
    } else {
        loan.repay_date = req.body.repay_date;
    }
    if (!loan.interest_rate){
        return res.status(400).json({
            error: "Interest Rate is required!"
        });
    } else {
        loan.interest_rate = req.body.interest_rate;
    }
    if (!loan.approved){
        return res.status(400).json({
            error: "Is the loan approved?"
        });
    } else {
        loan.approved = req.body.approved;
    }
    if (!loan.state){
        return res.status(400).json({
            error: "What is the state of the loan?"
        });
    } else {
        loan.state = req.body.state;
    }
    loan.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "ERROR! Updating Banking Details Failed."
            });
        }
        res.json(data);
    });
};
exports.list = (req, res) => {
    Loan.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};