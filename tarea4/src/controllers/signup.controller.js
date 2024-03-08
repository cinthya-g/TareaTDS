const User = require('../models/user'); 
const { generateToken } = require('../models/token');
const ResponseStatus = require('../utils/response-status');
const hashPassword = require('../utils/hash-password');

class SignupController {

    createAccount(req, res){
        // create a new user account with the data from req.body and following the User model
        const data = {
            name: req.body.name,
            mail: req.body.mail,
            password: hashPassword(req.body.password)
        }
        User.create(data)
            .then(response => {
                const userDataForToken = {
                    _id: response._id,
                    name: response.name,
                    mail: response.mail
                
                };

                const token = generateToken(userDataForToken);
                res.json({
                    user: userDataForToken,
                    token: token
                });
            })
            .catch(e => {
                res.status(ResponseStatus.BAD_REQUEST).json({error: 'Something went wrong: ' + e});
            });
    }
    

}

module.exports = new SignupController();