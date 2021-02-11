
let element = document.getElementsByClassName('toggle-button')[0];
let navBar = document.getElementsByClassName('navbar-links')[0];


element.addEventListener('click', function(){
    navBar.classList.toggle('active');
});
