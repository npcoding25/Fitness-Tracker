require( 'dotenv' ).config();

const mongoose = require('mongoose')
const PORT = process.env.PORT || 8080;

// dependencies & setup
const express = require('express');
const app = express();

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for serving all the normal html
app.use( express.static('public') );

// for routes
require('./app/router/api-routes.js')(app)
require('./app/router/html-routes.js')(app)

// == process-wide error handling
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1); //mandatory (as per the Node.js docs)
});

app.listen(PORT, function() {
    console.log( `Fitness tracker (database:${process.env.DB_NAME}) on: https://localhost:${PORT}` );
}); 