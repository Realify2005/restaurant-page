import breakfastIMG from "./img/breakfast-menu.jpg";
import lunchIMG from "./img/lunch-menu.jpg";
import "../styles/menu.css"

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const breakfast = document.createElement("div");
    breakfast.classList.add("breakfast");

    const lunch = document.createElement("div");
    lunch.classList.add("lunch");

    const header = document.createElement("h1");
    header.textContent = "Guzman have 2 types of menus, breakfast and lunch."

    const breakfastMenu = document.createElement("img");
    breakfastMenu.src = breakfastIMG;
    breakfastMenu.alt = "Breakfast Menu";

    const lunchMenu = document.createElement("img");
    lunchMenu.src = lunchIMG;
    lunchMenu.alt = "Lunch Menu";

    const breakfastDesc = document.createElement("p");
    breakfastDesc.textContent = "Starts from midnight and ends at 10.30am in all stores";

    const lunchDesc = document.createElement("p");
    lunchDesc.textContent = "Starts from 10.30am and ends at midnight in all stores";

    breakfast.appendChild(breakfastMenu);
    breakfast.appendChild(breakfastDesc);
    lunch.appendChild(lunchMenu);
    lunch.appendChild(lunchDesc);

    menu.appendChild(header);
    menu.appendChild(breakfast);
    menu.appendChild(lunch);

    return menu;
}

function loadMenu() {
    const content = document.querySelector("#content");
    content.textContent = '';
    content.appendChild(createMenu());
}

export default loadMenu;