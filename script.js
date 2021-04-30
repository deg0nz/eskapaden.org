/**
 *
 *  Global variables
 *
 */

let coloredLettersCounter = 0;
const eskapadeLetterColorClasses = ["violet", "blue", "blue2", "green", "yellow", "orange", "pink", "red"];

/**
 *
 *  Small class for changing a letter's color on hover
 *  and changing other stuff on letter mouse events.
 *
 */

class EskapadeLetter {
  constructor(letterElement, descriptionTextElement, colorClass) {
    this.letterElement = letterElement;
    this.descriptionTextElement = descriptionTextElement;
    this.colorClass = colorClass;
    this.colored = false;
  }

  initEventListeners() {
    const reitsportDescription = document.getElementById("description-reitsport");
    const ridingLabel = document.getElementById("riding-label");
    const educationalLabel = document.getElementById("educational-label");
    
    this.letterElement.addEventListener("mouseover", () => {
      this.toggleColor();

      if (coloredLetterExists()) {
        reitsportDescription.style.textDecoration = "line-through";
        ridingLabel.innerText = "Fertchens";
        educationalLabel.innerText = "Etepetete";
      } else {
        reitsportDescription.style.textDecoration = "";
        ridingLabel.innerText = "Reitsport";
        educationalLabel.innerText = "Bildungssprachlich";
      }
    });
  }

  toggleColor() {
    if (this.colored) {
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

/**
 *
 *  Stuff for tracking overall eskapade letter states
 *
 */

function coloredLetterExists() {
  return coloredLettersCounter > 0;
}

function allLettersAreColored() {
  return coloredLettersCounter === eskapadeLetterColorClasses.length;
}

/**
 *
 * Starting point
 * Get all the DOM elements for creating letter classes
 * and create letters
 *
 */

window.onload = () => {
  const eskapadeLetterElements = document.getElementsByClassName("eskapade-letter");
  const coloredDescriptionParts = document.getElementsByClassName("colored-description");
  const eskapadeLetters = [];

  for (let i = 0; i < eskapadeLetterElements.length; i++) {
    const letterElement = eskapadeLetterElements[i];
    const descriptionTextElement = coloredDescriptionParts[i];
    const color = eskapadeLetterColorClasses[i];
    const letter = new EskapadeLetter(letterElement, descriptionTextElement, color);
    letter.initEventListeners();
    eskapadeLetters.push(letter);
  }
};
