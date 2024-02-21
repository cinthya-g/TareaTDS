const User = require('./../models/user');
const ResponseStatus = require('./../utils/response-status');


class UserController {

    // Use the User model existing methods (mongoose)

    getUsers(req, res) {
        // Find all users inside the collection
        User.find()
            .then(response => {
                console.log("Logged user:", req.user.name)
                res.send(response);
            })
            .catch(e => {
                res.status(ResponseStatus.NOT_FOUND).send('Something went wrong finding users!');
            });
    }
    
    getUser(req, res) {
        // Find a user by id
        const userId = req.params.id;
        // Check if the id exists in the parameter
        if (!userId || userId.trim() === '') {
            return res.status(ResponseStatus.BAD_REQUEST).send('No user ID provided!');
        }
        User.findById(userId.trim())
            .then(response => {
                if (!response) {
                    return res.status(ResponseStatus.NOT_FOUND).send('User not found!');
                }
                res.send(response);
            })
            .catch(e => {
                res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong finding that user!');
            });
    }
    
    
    postUser(req, res) {
        // Post a new user 
        const { name, mail, password, status, role } = req.body;

        // Validate if the required fields are present
        if (!name || !mail || !password) {
            return res.status(ResponseStatus.BAD_REQUEST).send('Name, mail, and password are required!');
        }

        const user = new User({ name, mail, password, status, role });
        user.save()
            .then(response => {
                res.status(ResponseStatus.CREATED).send(response);
            })
            .catch(e => {
                res.status(ResponseStatus.BAD_REQUEST).send('Couldn\'t create the user: ' + e);
            });
    }
    
    putUser(req, res) {
        // Update a user by id
        const userId = req.params.id;
        const { name, mail, password, status, role } = req.body;
        User.findByIdAndUpdate(userId.trim(), { name, mail, password, status, role }, { new: true })
            .then(response => {
                res.send(response);
            })
            .catch(e => {
                res.status(ResponseStatus.BAD_REQUEST).send('Couldn\'t update the user!' + e);
            });
    }
    
    deleteUser(req, res) {
        // Delete a user by id
        const userId = req.params.id;
        User.findByIdAndDelete(userId.trim())
            .then(response => {
                res.send(response);
            })
            .catch(e => {
                res.status(ResponseStatus.BAD_REQUEST).send('Couldn\'t delete the user! ' + e);
            });
    }


}

module.exports = new UserController();