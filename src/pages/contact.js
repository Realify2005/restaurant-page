import logo from "./img/logo.webp";
import "../styles/contact.css";

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    
    const logoPic = document.createElement("img");
    logoPic.src = logo;

    const phone = document.createElement("p");
    phone.textContent = "Contact us at 0123456789 (local) or +61987654321 (overseas)"

    const openingTimesHeader = document.createElement("h6");
    openingTimesHeader.textContent = "Opening Times:";

    const ul = document.createElement("ul");
    const openingTimes = ["Monday: All day", "Tuesday: All day", "Wednesday: All day", "Thursday: All day", "Friday: All day", "Saturday: All day", "Sunday: All day", "Public Holidays: CLOSED"];

    for (let i = 0; i < openingTimes.length ; i++) {
        const li = document.createElement("li");
        li.textContent = openingTimes[i];

        ul.appendChild(li);
    }

    contact.appendChild(logoPic);
    contact.appendChild(phone);
    contact.appendChild(openingTimesHeader);
    contact.appendChild(ul);

    return contact;
}

function loadContact() {
    const content = document.querySelector("#content");
    content.textContent = '';
    content.appendChild(createContact());
}

export default loadContact;