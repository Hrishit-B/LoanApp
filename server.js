const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

// const db = '';

// mongoose
//     .connect(db, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     })
//     .then(con => {
//         console.log('db successfully connected');
//     });

const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});