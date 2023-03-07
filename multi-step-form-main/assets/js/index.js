
class GestionForm {
    constructor() {
        // === Current Step === //
        this.step = 1;

        // === Inputs === //
        this.name = document.querySelector("#form-name");
        this.email = document.querySelector("#form-email");
        this.phone = document.querySelector("#form-phone");


        
        this.event();
    }

    event() {
        this.stepInfo();
    }

    stepInfo() {
        const buttonStep1 = document.querySelector(".container-info__button");

        buttonStep1.addEventListener("click", () => {
            this.checkValueIsNotEmpty(this.email, document.querySelector(".error-message__email"));
            this.checkValueIsNotEmpty(this.name, document.querySelector(".error-message__name"));
            this.checkValueIsNotEmpty(this.phone, document.querySelector(".error-message__phone"));

            if (this.email.value === "" || this.name.value === "" || this.phone.value === "") {
                return;
            }

            this.step = 2;
        })
    }

    checkValueIsNotEmpty(elementDom, errorDom) {
        if (elementDom.value === "") {
            errorDom.style.display = "block";
            elementDom.style.borderColor = "hsl(354, 84%, 57%)";
        } else {
            errorDom.style.display = "none";
            elementDom.style.borderColor = "hsl(213, 96%, 18%)";
        }
    }

    changeStep() {
        const stepsDom = document.querySelectorAll(".aside__step");

        stepsDom.forEach((element, index) => {
            if ((index + 1) === this.step) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        })
    }
}


const gestionForm = new GestionForm();