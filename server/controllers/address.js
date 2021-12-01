const Address = require('../models/address');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.addressById = (req, res, next, id) => {
    Address.findById(id).exec((err, address) => {
        if (err || !address) {
            return res.status(400).json({
                error: 'Address does not exist'
            });
        }
        req.address = address;
        next();
    });
};
exports.create = (req, res) => {
    const address = new Address(req.body);
    address.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};
exports.read = (req, res) => {
    return res.json(req.address);
};
exports.update = (req, res) => {
    // const { street, city, province, postal_code } = req.body;
    const address = req.address;
    if (!address.street) {
        return res.status(400).json({
            error: "Street is required"
        });
    } else {
        address.street = req.body.street;
    }

    if (!address.city) {
        return res.status(400).json({
            error: "City is required"
        });
    } else {
        address.city = req.body.city;
    }

    if (!address.province) {
        return res.status(400).json({
            error: "Province is required"
        });
    } else {
        address.province = req.body.province;
    }

    if (!address.postal_code) {
        return res.status(400).json({
            error: "Postal Code is required"
        });
    } else {
        address.postal_code = req.body.postal_code;
    }
    address.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Address update failed"
            });
        }
        res.json(data);
    });
};
exports.list = (req, res) => {
    Address.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
