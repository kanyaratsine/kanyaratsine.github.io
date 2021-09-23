let info = document.getElementById('js-info');
let contact = document.getElementById('js-contact');

contact.addEventListener("click",
function() {
    info.classList.toggle('active');
}
);