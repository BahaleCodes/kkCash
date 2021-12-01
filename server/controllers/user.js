const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const { Loan } = require('../models/loan');

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
    const { first_name, last_name, email, phone_number, password, idNum, home_language, marital_status, home_status, dependants } = req.body;
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
        if (!dependants) {
            return res.status(400).json({
                error: 'Dependants is required'
            });
        } else {
            user.dependants = dependants;
        }
        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
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

exports.addOrderToUserHistory = (req, res, next) => {
    let history = [];

    req.body.loan.forEach(item => {
        loan_history.push({
            _id: item._id,
            amount: items.loan,
            duration: items.duration,
            repay_date: items.repay_date,
            interest_rate: items.interest_rate,
            approved: items.approved,
            state: items.state
        });
    });

    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { history: history } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};

exports.purchaseHistory = (req, res) => {
    Loan.find({ user: req.profile._id })
        .populate('user', '_id name')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};