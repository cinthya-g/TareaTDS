const User = require('./../models/user');
const ResponseStatus = require('./../utils/response-status');


class UserController {

    getUsers(req, res) {
        const user = new User();
        user.findAll()
            .then(users => 
                res.json(users)
            )
            .catch(error => 
                res.status(ResponseStatus.BAD_REQUEST).json({ message: 'Something went wrong finding all users!' })
            );
    }
    
    getUser(req, res) {
        const user = new User();
        user.findById(req.params.id)
            .then(user => 
                res.json(user)
            )
            .catch(error => 
                res.status(ResponseStatus.BAD_REQUEST).json({ message: `'Something went wrong finding user ${req.params.id}!` })
            );
    }
    
    postUser(req, res) {
        const user = new User();
        user.create(req.body)
            .then(user => 
                res.status(ResponseStatus.CREATED).json(user)
            )
            .catch(error => res.status(ResponseStatus.BAD_REQUEST).json({ message: 'Something went wrong creating the user!' })
        );
    }
    
    putUser(req, res) {
        const user = new User();
        user.update(req.params.id, req.body)
            .then(user => 
                res.json(user)
            )
            .catch(error => 
                res.status(ResponseStatus.BAD_REQUEST).json({ message: 'Something went wrong updating a user!' })
            );
    }
    
    deleteUser(req, res) {
        const user = new User();
        user.delete(req.params.id)
            .then(response => 
                res.json(response)
            )
            .catch(error => res.status(ResponseStatus.BAD_REQUEST).json({ message: 'Something went wrong deleting the user!' })
        );
    }

}

module.exports = new UserController();
