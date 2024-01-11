import createHome from "./home";
import "../styles/website.css"

function createNav() {
    const navbar = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact Us";

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function buildWebpage() {
    const content = document.getElementById("content");

    content.appendChild(createNav());
    content.appendChild(createHome());
}

export default buildWebpage();