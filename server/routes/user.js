const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth');
const { userById, read, update, loansHistory, addressByUser, bankByUser, financesByUser, empByUser } = require('../controllers/user');

router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
    });
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.get('/loans/by/user/:userId', requireSignin, isAuth, loansHistory);
router.get('/address/by/user/:userId', requireSignin, isAuth, addressByUser);
router.get('/bank/by/user/:userId', requireSignin, isAuth, bankByUser);
router.get('/finances/by/user/:userId', requireSignin, isAuth, financesByUser);
router.get('/employment/by/user/:userId', requireSignin, isAuth, empByUser);

router.param('userId', userById);

module.exports = router;
