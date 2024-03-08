const path = require('path');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./src/routes');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views')

app.use('/assets', express.static(path.join(__dirname,'public')));
app.use('/client', express.static(path.join(__dirname,'js-client')));

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

connect();

