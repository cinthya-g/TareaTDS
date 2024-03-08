const ResponseStatus = require('./../utils/response-status');
const { verifyToken } = require('./../models/token');


const authUserMiddleware = (req, res, next) => {
    console.log('MIDDLEWARE: entered to authUserMiddleware');
    const token = req.query.token;    
    if(token) { 
        try {
            // verify the param token 
            const decoded = verifyToken(token);
            req.user = decoded;
            res.locals.username = decoded.name; // sends the username as a handlebar parameter
            next();
        } catch(e) {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
};

module.exports = authUserMiddleware;