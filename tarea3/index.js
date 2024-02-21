const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

const routes = require('./src/routes');
app.use(routes);

const port = process.env.PORT || 3000;

const db_url = process.env.MONGO_URL;
async function connect() {
    try {
        await mongoose.connect(db_url);
        app.listen(port, () => {
            if(process.env.NODE_ENV === 'dev'){
                console.log('DEV MODE: App is running on port ' + port);
            } else {
                console.log('App is running');
            }
        });
    } catch(e) {
        console.log('Error connecting to the database', e);
    }
}

// Call the connect function
connect();

