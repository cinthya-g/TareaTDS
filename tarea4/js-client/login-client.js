
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
                    window.location.href = `/?token=${data.token}`;
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
