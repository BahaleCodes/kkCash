const express = require('express');
const router = express.Router();

const { create, loanById, read, update, list } = require('../controllers/loan');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/loan/view/:loanInfoId/:userId', requireSignin, isAuth, read);
router.post('/loan/create/:userId', requireSignin, isAuth, create);
router.put('/loan/update/:loanInfoId/:userId', requireSignin, isAuth, update);
router.get('/loan/all/:userId', requireSignin, isAuth, isAdmin, list);

router.param('loanInfoId', loanById);
router.param('userId', userById);

module.exports = router;
