const express = require('express');
const morgan = require('morgan');
const app = express();


//Settings
app.set('port' , process.env.PORT || 3000);

//Database connection
app.get(require('./database'));


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/router'));

//Server
app.listen(app.get('port') , () => {
    console.log('server on port' , app.get('port'));
});