const currentDayOutput = document.querySelector("#currentDay");
const blocksContainer = document.querySelector(".container");

// current date
const today = moment();

// display current date - format: Saturday, March 12th
currentDayOutput.textContent = today.format("dddd, MMMM Do");

