module.exports = function(app) {

    // unprotected pages

    // core app functionality
    require('./routes/core')(app);

    // authentication functionality
    require('./routes/auth/login')(app); // login
    require('./routes/auth/register')(app); // register

    // admin testing routes
    require('./routes/admin')(app)
}