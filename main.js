const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
/*
var updates = [
    {
        title: "Moving to DC",
        link: "",
        image: "profile.jpeg"
    },
    {
        title: "Graduating from Columbia",
        link: "",
        image: "profile.jpeg"
    },
    {
        title: "Piano Recital IV: Graduation Recital, 8 May 2022",
        link: "",
        image: "profile.jpeg"
    }
];

var host_div = document.getElementById("update-cards");

updates.forEach(element => {
    var card_div = document.createElement("div");
    card_div.classList.add("card", "col-sm-6", "col-12", "border-0");

    var card_image = document.createElement("img");
    card_image.src = element.image;
    card_image.style.cssText = "object-fit: cover; max-height: 100%; max-width: 100%;";

    var card_text = document.createElement("p");
    card_text.innerHTML = element.title;

    card_div.appendChild(card_image);
    card_div.appendChild(card_text);
    host_div.appendChild(card_div);
});
*/