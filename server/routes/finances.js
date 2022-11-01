const express = require('express');
const router = express.Router();

const { create, financesById, read, update, list } = require('../controllers/finances');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById, addFinancesData } = require('../controllers/user');

router.get('/finances/view/:financesInfoId/:userId', requireSignin, isAuth, read);
router.post('/finances/create/:userId', requireSignin, isAuth, addFinancesData, create);
router.put('/finances/update/:financesInfoId/:userId', requireSignin, isAuth, update);
router.get('/finances/all/:userId', requireSignin, isAuth, isAdmin, list);

router.param('financesInfoId', financesById);
router.param('userId', userById);

module.exports = router;
