function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!email || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!password || password.length < 6) {
        alert("Please enter a password with at least 6 characters.");
        return;
    }

}

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function toggleMenu() {
    var menu = document.getElementById("myMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("mouseup", function (event) {
    var menu = document.getElementById("myMenu");
    if (event.target != menu && event.target.parentNode != menu) {
        menu.style.display = "none";
    }
});