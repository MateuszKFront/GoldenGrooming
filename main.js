const userNameInput = document.querySelector("#name");
const userPhoneNumber = document.querySelector("#phone");
const nameValid = new RegExp(/^[A-Za-ząćęńłźżóŁ]{3,}\s+[A-Za-ząćęńłźżóŁŻ]{3,}$/, "m"); // first name and surname validator 
const phoneValid = new RegExp(/^(\(?(\+|00)?48\)?)?[ -]?[1-9]{1}\d{2}[ -]?\d{3}[ -]?\d{3}$/); // Polish phone number validator
const emailValid = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//Soon rebuild to function = return Object.RegExp.test(String( expression).toLowerCase());
function inputBoolenValidator(regexPattern, elementTarget) {
    const domClassListArray = [...elementTarget.classList];
    if (domClassListArray.length > 1) {
        domClassListArray[1].pop();
    }
    if (regexPattern.test(elementTarget.value)) {
        elementTarget.classList.remove("inputInvalid")
        elementTarget.classList.add("inputValid");
        return true;
    }
    else {
        elementTarget.classList.add("inputInvalid");
        return false;
    }
}
//funtion valid user's input than check string is valid or invalid
userNameInput.addEventListener("change", () => { inputBoolenValidator(nameValid, userNameInput) });
userPhoneNumber.addEventListener("change", () => { inputBoolenValidator(phoneValid, userPhoneNumber) });
//
const formButton = document.querySelector("#sendMessage");
formButton.addEventListener("click", (event) => {
    event.preventDefault();
})
// form validation
const toContactForm = document.querySelector("#tocantackForm");
toContactForm.addEventListener("click", () => {
    const contactForm = document.querySelector("#contact");
    if (contactForm.style.display === "none") {
        contactForm.classList.remove("disappearContact");
        contactForm.classList.add("appearContact");
        contactForm.style = "";
    }
    else {
        contactForm.classList.remove("appearContact");
        contactForm.classList.add("disappearContact");
        setTimeout(() => contactForm.style.display = "none", 1000);
    }
})
// to appear and disappear contact form
const photoslider = document.getElementById("slider");
const listPhoto = photoslider.children;
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
let count = 0;
prevButton.addEventListener("click", () => { prevSlide() });
nextButton.addEventListener("click", () => { nextSlide() });
function nextSlide() {
    listPhoto[count].classList.remove("activeSlide");
    if (count === listPhoto.length - 1)
        count = 0;
    else
        count += 1;
    listPhoto[count].classList.add("activeSlide");
}
function prevSlide() {
    listPhoto[count].classList.remove("activeSlide");
    if (count === 0)
        count = listPhoto.length - 1;
    else
        count -= 1;
    listPhoto[count].classList.add("activeSlide");
}
// slider
const linkUL = document.getElementById("linkList");
const hamburger = document.querySelector("#hamburger");
const setBtnState = document.querySelectorAll(".burger")
let classes = linkUL.classList;
hamburger.classList.add("beng");
hamburger.addEventListener("click", () => {
    let countBar = 1;
    let result = classes.toggle("disappearContact");
    if (result) {
        console.log("Off");
        hamburger.classList.remove("beng");
    }
    else {
        console.log("ON")
        hamburger.classList.add("beng");
    }

    if (linkUL.style.display === "none") {
        linkUL.classList.remove("disappearContact");
        linkUL.classList.add("appearContact");
        linkUL.style = "";
    }
    else {
        linkUL.classList.remove("appearContact");
        linkUL.classList.add("disappearContact");
        linkUL.style.display = "none";
    }
})
// navbarMenu button
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

//does it nice ?