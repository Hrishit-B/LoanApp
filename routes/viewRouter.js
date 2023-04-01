const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getOverview);

router.get('/login', viewController.getLoginInfo);

router.get('/company', viewController.getCompanyInfo);

router.get('/Frequently-Asked-Questions', viewController.getFAQ);

router.get('/create-account', viewController.getCreateAccount);

router.get('/user', viewController.getUser);

router.get('/results', viewController.getResults);

router.get('/apply-now', viewController.uploadInfo);

module.exports = router;