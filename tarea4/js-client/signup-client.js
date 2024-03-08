
function signUp() {
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('signupName').value;
        let mail = document.getElementById('signupEmail').value;
        let password = document.getElementById('signupPassword').value;

        // check if every field is filled
        if (!name || !mail || !password) {
            alert('Please fill all the fields');
            return;
        }

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, mail, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    fetchRootWithToken(data.token);
                } else {
                    alert(data.error);
                }
            })
            .catch(e => {
                alert('Error: ' + e.message);
            });
    });
}
signUp();

function fetchRootWithToken(token) {
    // Send headers to authMiddleware
    fetch('/', {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}` 
        }
    })
    .then(response => {
        return response.text();
    })
    .then(html => {
        history.pushState({}, '', '/');
        document.body.innerHTML = html;
        
    })
    .catch(error => {
        alert('Cannot auth!: '+ error.message);
    });
}
