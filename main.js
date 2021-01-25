const userNameInput = document.querySelector("#name");
const userPhoneNumber = document.querySelector("#phone");
const nameValid = new RegExp(/^[A-Za-ząćęńłźżóŁ]{3,}\s+[A-Za-ząćęńłźżóŁŻ]{3,}$/, "m"); // first name and surname validator 
const phoneValid = new RegExp(/^(\(?(\+|00)?48\)?)?[ -]?[1-9]{1}\d{2}[ -]?\d{3}[ -]?\d{3}$/) // Polish phone number validator
const emailValid = new RegExp(/^.+@[^/. ].*\.[a-z]{2,}$/)

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