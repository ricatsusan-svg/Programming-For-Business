function validateForm() {
    let valid = true;

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone = document.getElementById("phone");
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const country = document.getElementById("country");

    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    document.querySelectorAll("input, select").forEach(e => e.classList.remove("error-field"));

    if (fullname.value.trim() === "") {
        document.getElementById("errorFullname").innerText = "Full name cannot be empty.";
        fullname.classList.add("error-field");
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById("errorEmail").innerText = "Invalid email format.";
        email.classList.add("error-field");
        valid = false;
    }

    if (password.value.length < 6) {
        document.getElementById("errorPassword").innerText = "Password must be at least 6 characters.";
        password.classList.add("error-field");
        valid = false;
    }

    if (confirmPassword.value !== password.value) {
        document.getElementById("errorConfirmPassword").innerText = "Passwords do not match.";
        confirmPassword.classList.add("error-field");
        valid = false;
    }

    if (!/^\d{10,}$/.test(phone.value)) {
        document.getElementById("errorPhone").innerText = "Phone must be at least 10 digits and numeric.";
        phone.classList.add("error-field");
        valid = false;
    }

    if (!gender) {
        document.getElementById("errorGender").innerText = "Please select a gender.";
        valid = false;
    }

    if (hobbies.length === 0) {
        document.getElementById("errorHobbies").innerText = "Select at least one hobby.";
        valid = false;
    }

    if (country.value === "") {
        document.getElementById("errorCountry").innerText = "Please select a country.";
        country.classList.add("error-field");
        valid = false;
    }

    return valid;
}
