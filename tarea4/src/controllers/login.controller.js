const User = require('../models/user'); 
const { generateToken } = require('../models/token');
const ResponseStatus = require('../utils/response-status');
const hashPassword = require('../utils/hash-password');

class LoginController {

    logInUser(req, res){
        // login user with mail and password in db
        User.findOne({
            mail: req.body.mail,
            password: hashPassword(req.body.password)
        })
            .then(response => {
                if(response){
                    // GENERATE TOKEN
                    res.json({ token: generateToken(response)})
                }else{
                    res.status(ResponseStatus.UNAUTHENTICATED).json({ error: 'That account does not exist!' });
                }
            })
            .catch(e => {
                res.status(ResponseStatus.BAD_REQUEST).json({error: 'Something went wrong: ' + e});
            });
    }
    

}

module.exports = new LoginController();