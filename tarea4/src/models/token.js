const jwt = require('jsonwebtoken');

const generateToken = (loggedInUser) => {
    const data = {
        id: loggedInUser._id,
        name: loggedInUser.name,
        mail: loggedInUser.mail,
    }

    return jwt.sign(data, process.env.TOKEN_KEY);

}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_KEY);
}

module.exports = {
    generateToken,
    verifyToken
};