require('dotenv').config();

const express = require("express"),
      massive = require("massive"),
      cors = require("cors"),
      session = require('express-session'),
      authCtrl = require ('./authController'),

    //   controller = require('controller'),
      app = express(),
      { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(cors());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 *60 *24 *365
        }
    })
)

app.post('api/auth/register', authCtrl.register)
app.post('api/auth/login', authCtrl.login)
app.post('api/auth/logout', authCtrl.logout)
app.get('api/auth/user', authCtrl.getUser)



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
    app.listen(SERVER_PORT, () =>
        console.log(`Server running on ${SERVER_PORT}`)
    );
})