const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const Loan = require('../models/loan');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};
exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};
exports.update = (req, res) => {
    const { first_name, last_name, email, phone_number, idNum, home_language, marital_status, home_status, dependents, address, employment, finances, banking, loan } = req.body;
    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!first_name) {
            return res.status(400).json({
                error: 'First Name is required'
            });
        } else {
            user.first_name = first_name;
        }
        if (!last_name) {
            return res.status(400).json({
                error: 'Last Name is required'
            });
        } else {
            user.last_name = last_name;
        }
        if (!phone_number) {
            return res.status(400).json({
                error: 'Phone Number is required'
            });
        } else {
            user.phone_number = phone_number;
        }
        if (!email) {
            return res.status(400).json({
                error: 'E-mail is required'
            });
        } else {
            user.email = email;
        }
        if (!idNum) {
            return res.status(400).json({
                error: 'ID Number is required'
            });
        } else if (idNum.length < 13 ) {
            return res.status(400).json({
                error: 'South African ID Number should have 13 digits'
            });
        }
        else {
            user.idNum = idNum;
        }
        if (!home_language) {
            return res.status(400).json({
                error: 'Home Language is required'
            });
        } else {
            user.home_language = home_language;
        }
        if (!marital_status) {
            return res.status(400).json({
                error: 'Marital Status is required'
            });
        } else {
            user.marital_status = marital_status;
        }
        if (!home_status) {
            return res.status(400).json({
                error: 'E-mail is required'
            });
        } else {
            user.home_status = home_status;
        }
        if (!dependents) {
            return res.status(400).json({
                error: 'Dependents are required'
            });
        } else {
            user.dependents = dependents;
        }
        if (address) {
            user.address = address;
        }
        if (employment) {
            user.employment = employment;
        }
        if (banking) {
            user.banking = banking;
        }
        if (finances) {
            user.finances = finances;
        }
        if (loan) {
            user.loan = loan;
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

exports.addLoanToUserHistory = (req, res, next) => {
    let loan_history = [];

    loan_history.push(req.body);
    
    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { loan_history: loan_history } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};

exports.loansHistory = (req, res) => {
    Loan.find({ user: req.profile._id })
        .populate('user', '_id first_name')
        .sort('-created')
        .exec((err, loans) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(loans);
        });
};