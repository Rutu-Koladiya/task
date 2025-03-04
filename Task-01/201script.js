const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e){
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === "rutu" && password === "123") {
        alert('Login Successfully!');

        // set login flag - to check in home it is login or not
        sessionStorage.setItem("isLoggedIn", "true");

        window.location.href = "201home.html"
    } else {
        alert('Invalid username or password!');
    }
}
);