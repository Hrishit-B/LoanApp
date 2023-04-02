const catchAysnc = require('../utils/catchAsync');

exports.getOverview = catchAysnc(async(req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('index');
});

exports.getLoginInfo = catchAysnc(async(req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('login');
});

exports.getCompanyInfo = catchAysnc(async (req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('company');
});

exports.getFAQ = catchAysnc(async (req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('faq');
});

exports.getCreateAccount = catchAysnc(async (req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('createAcc');
});

exports.getUser = catchAysnc(async (req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('user');
});

exports.getResults = catchAysnc(async (req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('results');
});

exports.uploadInfo = catchAysnc(async (req, res, next) => {
    console.log('request recieved');
    res
        .status(200)
        .render('upload');
});