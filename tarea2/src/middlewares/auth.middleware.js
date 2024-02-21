const ResponseStatus = require('./../utils/response-status');

const authUser = {
    id: 125,
    role: 'client', // chenge this role to test the middleware
    name: 'Cinthya'
}


const authUserMiddleware = (req, res, next) => {
    const { token } = req.query;
    if(token && token === '12345') {
        req.user = authUser;
        next();
    } else {
        res.sendStatus(ResponseStatus.UNAUTHENTICATED); //401
    }
};

module.exports = authUserMiddleware;