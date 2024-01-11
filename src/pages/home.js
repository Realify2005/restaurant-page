import "../styles/home.css";
import gyg from "./img/restaurant.jpg";

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Guzman Y Gomez";

    const homeImage = document.createElement("img");
    homeImage.src = gyg;
    homeImage.alt = "Guzman breakfast burrito";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is the best menu on Guzman y Gomez, aside from the lunch burrito of course. MUST TRY!";

    home.appendChild(heading);
    home.appendChild(homeImage);
    home.appendChild(paragraph);

    return home;
}

function loadHome() {
    const content = document.querySelector("#content");
    content.textContent = '';
    content.appendChild(createHome());
}

export default loadHome;