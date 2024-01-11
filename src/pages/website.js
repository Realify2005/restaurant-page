import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "../styles/website.css"

function createNav() {
    const navbar = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.addEventListener("click", () => {
        loadHome();
    })
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.addEventListener("click", () => {
        loadMenu();
    })
    menuButton.textContent = "Menu";

    const contactButton = document.createElement("button");
    contactButton.addEventListener("click", () => {
        loadContact();
    })
    contactButton.textContent = "Contact Us";

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function buildWebpage() {
    const nav = document.querySelector(".nav");

    nav.appendChild(createNav());
    loadHome();
}

export default buildWebpage();