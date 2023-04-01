const path = require('path');
const express = require('express');

const appError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const viewRouter = require('./routes/viewRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', viewRouter);

app.all('*', (req, res, next) => {
    next(new appError(`cant't find ${req.originalUrl} on this server`));
});

app.use(globalErrorHandler);

module.exports = app;