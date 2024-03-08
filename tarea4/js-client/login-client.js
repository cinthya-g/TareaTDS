
function logIn() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let mail = document.getElementById('loginMail').value;
        let password = document.getElementById('loginPassword').value;
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail, password })
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
logIn();

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