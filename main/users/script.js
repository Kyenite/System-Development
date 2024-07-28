const hideBtn = document.getElementById("hide-btn");
var hidestat = true;

hideBtn.addEventListener("click", function() {
    const password = document.getElementsByClassName("form-control")[2];

    if(hidestat) {
        hideBtn.classList.remove("fa-eye");
        hideBtn.classList.add("fa-eye-slash");
        password.type = 'text';
    } else {
        hideBtn.classList.remove("fa-eye-slash");
        hideBtn.classList.add("fa-eye");
        password.type = 'password';
    }

    hidestat = !hidestat;
});