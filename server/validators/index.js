exports.userSignupValidator = (req, res, next) => {
    req.check('first_name', 'Name is required').notEmpty();
    req.check('last_name', 'Name is required').notEmpty();
    req.check('phone_number', 'Phone number is required').notEmpty();
    req.check('phone_number')
        .isLength({
            min: 10,
            max: 10
        })
        .withMessage('South African phone number must have 10 digits');
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @ and a valid domain')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('idNum', 'Valid South African Identification Number required').notEmpty();
    req.check('idNum')
        .isLength({
            min: 13,
            max: 13
        })
        .withMessage("South African ID Number has 13 digits")
    req.check('home_language', 'Home Language is required').notEmpty();
    req.check('marital_status', 'Marital Status is required').notEmpty();
    req.check('home_status', 'Home Status is required').notEmpty();
    req.check('dependents', 'Number of Dependents required').notEmpty();
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({ min: 8 })
        .withMessage('Password must contain at least 8 characters')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)
        .withMessage('Password must contain a mixture of characters ( Numbers, Caps, Symbols )');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};