let but = document.querySelector('.icon');
let but1 = document.querySelector('.icon1');
let password = document.querySelector('.password');
but.classList.add('hide')
but.onclick = function (event) {
    but.classList.add('hide');
    but1.classList.remove('hide');
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
    event.preventDefaultfadklam.,fada();};

but1.onclick = function (event) {
    but1.classList.add('hide');
    but.classList.remove('hide');
    if (password.type === "text") {
        password.type = "password";
    } else {
        password.type = "text";
    }
event.preventDefault();};
