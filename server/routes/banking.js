const express = require('express');
const router = express.Router();

const { create, bankingInfoById, read, update, list } = require('../controllers/banking');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/bank/view/:bankingInfoId/:userId', requireSignin, isAuth, read);
router.post('/bank/create/:userId', requireSignin, isAuth, create);
router.put('/bank/update/:bankingInfoId/:userId', requireSignin, isAuth, update);
router.get('/banks/all/:userId', requireSignin, isAuth, isAdmin, list);

router.param('bankingInfoId', bankingInfoById);
router.param('userId', userById);

module.exports = router;
