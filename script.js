class EskapadeLetter {

    constructor(letterElement, descriptionTextElement, colorClass) {
        this.letterElement = letterElement;
        this.descriptionTextElement = descriptionTextElement;
        this.colorClass = colorClass;
        this.colored = false;
    }

    initEventListeners() {
        this.letterElement.addEventListener("mouseover", () => {
            this.toggleColor();

            const reitsportDescription = document.getElementById("description-reitsport");
            if(coloredLetterExists()) {
                reitsportDescription.style.textDecoration = "line-through";
            } else {
                reitsportDescription.style.textDecoration = "";
            }
        });
    }

    toggleColor() {
        if(this.colored) {
            this.letterElement.classList.remove(this.colorClass);
            this.descriptionTextElement.classList.remove(this.colorClass);
            this.colored = false;
            coloredLettersCounter -= 1;
        } else {
            this.letterElement.classList.add(this.colorClass);
            this.descriptionTextElement.classList.add(this.colorClass);
            this.colored = true;
            coloredLettersCounter += 1;
        }
    }
}

function coloredLetterExists() {
    return coloredLettersCounter > 0;
}

function allLettersAreColored() {
    return coloredLettersCounter === eskapadeLetterColorClasses.length;
}

let coloredLettersCounter = 0;

const eskapadeLetterColorClasses = ["violet", "blue", "blue2", "green", "yellow", "orange", "pink", "red"];

window.onload = () => {
    const eskapadeLetterElements = document.getElementsByClassName("eskapade-letter");
    const coloredDescriptionParts = document.getElementsByClassName("colored-description");

    console.log(eskapadeLetterElements);
    console.log(coloredDescriptionParts);
    const eskapadeLetters = [];

    for (let i = 0; i < eskapadeLetterElements.length; i++) {
        const letterElement = eskapadeLetterElements[i];
        const descriptionTextElement = coloredDescriptionParts[i];
        const color = eskapadeLetterColorClasses[i];
        const letter = new EskapadeLetter(letterElement, descriptionTextElement, color);
        letter.initEventListeners();
        eskapadeLetters.push(letter);
    }

    console.log(eskapadeLetters);
}