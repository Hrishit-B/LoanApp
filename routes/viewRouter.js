const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.getOverview);

router.get('/login', viewController.getLoginInfo);

router.get('/company', viewController.getCompanyInfo);

router.get('/faq', viewController.getFAQ);

router.get('/createAcc', viewController.getCreateAccount);

router.get('/results', viewController.getResults);

router.get('/apply-now', viewController.uploadInfo);

router.get('/user', viewController.userPage);

router.get('/success', viewController.succesPage);

module.exports = router;