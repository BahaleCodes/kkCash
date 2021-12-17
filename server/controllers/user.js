const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const Loan = require('../models/loan');
const Address = require('../models/address');
const banking = require('../models/banking');
const employment = require('../models/employment');
const finances = require('../models/finances');

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
    const { first_name, last_name, email, phone_number } = req.body;
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
exports.addBankingToUserHistory = (req, res, next) => {
    let userBank = [];
    userBank.push(req.body);
    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { userBank: userBank } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};
exports.addEmpToUserHistory = (req, res, next) => {
    let userEmp = [];
    userEmp.push(req.body);
    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { userEmp: userEmp } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};
exports.addFInancesToUserHistory = (req, res, next) => {
    let userFinances = [];
    userFinances.push(req.body);
    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { userFinances: userFinances } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};
exports.addAddressToUserAddress = (req, res, next) => {
    let userAddress = [];
    userAddress.push(req.body);
    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { userAddress: userAddress } }, { new: true }, (error, data) => {
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
        .populate('user', '_id first_name last_name')
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
exports.addressByUser = (req, res) => {
    Address.find({ user: req.profile._id })
        .populate('user', '_id first_name last_name')
        .sort('-created')
        .exec((err, address) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(address);
        });
};
exports.bankByUser = (req, res) => {
    banking.find({ user: req.profile._id })
        .populate('user', '_id first_name last_name')
        .sort('-created')
        .exec((err, bank) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(bank);
        });
};
exports.empByUser = (req, res) => {
    employment.find({ user: req.profile._id })
        .populate('user', '_id first_name last_name')
        .sort('-created')
        .exec((err, bank) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(bank);
        });
};
exports.financesByUser = (req, res) => {
    finances.find({ user: req.profile._id })
        .populate('user', '_id first_name last_name idNum')
        .sort('-created')
        .exec((err, bank) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(bank);
        });
};