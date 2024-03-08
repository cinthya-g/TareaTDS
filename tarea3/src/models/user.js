// User Mongo Schema
const { Schema, model } = require('mongoose');
const AccountRoles = require('./../utils/account-roles');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    status : {
        type: String,
        default: 'I\'m new!'
    },
    role : {
        type: String,
        default: AccountRoles.STUDENT
    }
});

module.exports = model('users', schema);
