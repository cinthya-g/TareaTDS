const crypto = require('crypto');

module.exports = function(password) {
    password = password ?? ''; // si 'password' es null o undefined, se le asigna un string vacío
    const hashedPwd = crypto.scryptSync(password, process.env.SECRET_KEY, 24);
    return hashedPwd.toString('hex');
}