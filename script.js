const form = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");

const success = document.getElementById("successMessage");

// regex 
const nameCheck = /^[a-zA-Z ]{3,30}$/;
const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passCheck = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
const phoneCheck = /^03\d{9}$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let test = true;

    // name
    if (!nameCheck.test(name.value)) {
        document.getElementById("nameError").innerText = "Invalid name";
        test = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // email
    if (!emailCheck.test(email.value)) {
        document.getElementById("emailError").innerText = "Invalid email";
        test = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // password
    if (!passCheck.test(password.value)) {
        document.getElementById("passwordError").innerText = "Weak password";
        test = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // confirm password
    if (confirmPassword.value !== password.value) {
        document.getElementById("confirmPasswordError").innerText = "Not matching";
        test = false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    // phone
    if (!phoneCheck.test(phone.value)) {
        document.getElementById("phoneError").innerText = "Invalid phone";
        test = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // save data
    if (test) {
        let user = {
            name: name.value,
            email: email.value,
            phone: phone.value
        };

        localStorage.setItem("userData", JSON.stringify(user));

        success.innerText = "Saved successfully";

        form.reset();
    }
});

// load data after refresh
window.onload = function () {
    let data = localStorage.getItem("userData");

    if (data) {
        let user = JSON.parse(data);

        name.value = user.name;
        email.value = user.email;
        phone.value = user.phone;
    }
};