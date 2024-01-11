import "../styles/home.css";
import gyg from "./img/gyg.webp";

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Guzman Y Gomez";

    const breakfastImage = document.createElement("img");
    breakfastImage.src = gyg;
    breakfastImage.alt = "Guzman breakfast burrito";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is the best menu on Guzman y Gomez, aside from the lunch burrito of course. MUST TRY!";

    home.appendChild(heading);
    home.appendChild(breakfastImage);
    home.appendChild(paragraph);

    return home;
}

export default createHome;