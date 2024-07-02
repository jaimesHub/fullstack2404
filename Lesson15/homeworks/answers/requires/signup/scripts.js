// console.log(users);

users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

// Function to generate a unique ID
function generateId() {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if all fields are filled
    if (!first_name || !last_name || !email || !password) {
        document.getElementById('message').textContent = "Hãy nhập đầy đủ thông tin";
        document.getElementById('message').style.color = "red";
        return;
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("existingUser:: ", existingUser)
        document.getElementById('message').textContent = "Email này đã có tài khoản";
        document.getElementById('message').style.color = "red";
        return;
    }

    // Add new user
    const newUser = {
        id: generateId(),
        first_name,
        last_name,
        email,
        password
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById('message').textContent = "Đăng ký thành công";
    document.getElementById('message').style.color = "green";
});