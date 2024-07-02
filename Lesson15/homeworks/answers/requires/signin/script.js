// console.log(users);
localStorage.setItem("users", JSON.stringify(users));

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.getElementById('message').textContent = `Xin chào ${user.last_name} ${user.first_name}`;
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Thông tin tài khoản không chính xác";
        document.getElementById('message').style.color = "red";
    }
});