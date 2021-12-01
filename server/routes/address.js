const express = require('express');
const router = express.Router();

const { create, addressById, read, update, list } = require('../controllers/address');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

// router.get('/address/:addressId/:userId', requireSignin, isAuth, read);
// router.post('/address/create/:userId', requireSignin, isAuth, create);
// router.put('/address/:addressId/:userId', requireSignin, isAuth, update);
// router.get('/addresses/:userId', requireSignin, isAuth, list);


router.get('/address/view/:addressId/:userId', requireSignin, isAuth, read);
router.post('/address/create/:userId', requireSignin, isAuth, create);
router.put('/address/update/:addressId/:userId', requireSignin, isAuth, update);
router.get('/address/all/:userId', requireSignin, isAuth, isAdmin, list);

router.param('addressId', addressById);
router.param('userId', userById);

module.exports = router;
