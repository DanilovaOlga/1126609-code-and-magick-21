'use strict';

const NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
const SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
const COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
const EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

const setup = document.querySelector(".setup");
setup.classList.remove("hidden");

const setupSimilar = setup.querySelector(".setup-similar");
setupSimilar.classList.remove("hidden");
const setupSimilarList = setupSimilar.querySelector(".setup-similar-list");

const similarWizardTemplate = document.querySelector("#similar-wizard-template").content;
const similarWizardItem = similarWizardTemplate.querySelector(".setup-similar-item");

const getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
};

const createWizard = function () {
  return {
    name: getRandomItem(NAMES) + " " + getRandomItem(SURNAMES),
    coat: getRandomItem(COAT_COLORS),
    eyes: getRandomItem(EYES_COLORS),
  }
};

const similarWizards = [];

for (let i = 0; i < 4; i++) {
  similarWizards[i] = createWizard();
}

for (let i = 0; i < similarWizards.length; i++) {
  const clonedWizard = similarWizardItem.cloneNode(true);
  clonedWizard.querySelector(".setup-similar-label").textContent = similarWizards[i].name;
  clonedWizard.querySelector(".wizard-coat").style.fill = similarWizards[i].coat;
  clonedWizard.querySelector(".wizard-eyes").style.fill = similarWizards[i].eyes;
  setupSimilarList.appendChild(clonedWizard);
}
