const ResponseStatus = require('./../utils/response-status');
const { verifyToken } = require('./../models/token');


const authUserMiddleware = (req, res, next) => {
    const token = req.headers.Authorization || req.headers.authorization;
    if(token) { 
        try {
            // verify the headers token with the decoded one
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