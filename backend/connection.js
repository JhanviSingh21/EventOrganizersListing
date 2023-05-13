const mongoose = require('mongoose');

const url = require('./config').db_url;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('data successfully connected!')
    })
    .catch((err) => {
        console.error(err)
    })

module.exports = mongoose;