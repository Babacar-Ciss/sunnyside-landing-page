// DOM targeting
const hamburgerMenuDOM = document.getElementById("hamburger");
const menuDOM = document.querySelector(".header__menu-mobile");

console.log(menuDOM.id)


hamburgerMenuDOM.addEventListener("click", (e) => {
    e.preventDefault();

    if(menuDOM.id == "hide-mobile") menuDOM.removeAttribute('id');
    else menuDOM.setAttribute("id", "hide-mobile");

} )