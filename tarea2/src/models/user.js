// logic to handle user data from external API
const axios = require('axios');
const API_URL = process.env.URL;


class User {

    findAll() {
        return axios.get(`${API_URL}`)
            .then(response => response.data)
            .catch(error => console.error('Error finding users:', error));
    }

    findById(id) {
        return axios.get(`${API_URL}/${id}`)
            .then(response => response.data)
            .catch(error => console.error('Error finding user by ID:', error));
    }

    create(userData) {
        return axios.post(`${API_URL}`, userData)
            .then(response => response.data)
            .catch(error => console.error('Error creating user:', error));
    }

    update(id, userData) {
        return axios.put(`${API_URL}/${id}`, userData)
            .then(response => response.data)
            .catch(error => console.error('Error updating user:', error));
    }

    delete(id) {
        return axios.delete(`${API_URL}/${id}`)
            .then(response => response.data)
            .catch(error => console.error('Error deleting user:', error));
    }

}

module.exports = User;