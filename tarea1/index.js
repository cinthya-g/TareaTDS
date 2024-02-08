const express = require('express');
require('dotenv').config();
const app = express();

const routes = require('./src/routes');
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    if(process.env.NODE_ENV === 'dev'){
        console.log('DEV MODE: App is running on port ' + port);
    } else {
        console.log('App is running');
    }
});