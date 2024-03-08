
function signUp() {
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const mail = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

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
signUp();

