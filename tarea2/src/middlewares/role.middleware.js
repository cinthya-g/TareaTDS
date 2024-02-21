const ResponseStatus = require('./../utils/response-status');

const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const { user } = req;
        // Check if it is a single string and convert it to an array
        if (typeof allowedRoles === 'string') {
            allowedRoles = [allowedRoles];
        }
        // Compare the user role with the allowed roles for each endpoint
        if (user && allowedRoles.includes(user.role)) {
            next();
        } else {
            res.sendStatus(ResponseStatus.FORBIDDEN); // 403
        }
    };
};

module.exports = roleMiddleware;
