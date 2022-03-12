const currentDayOutput = document.querySelector("#currentDay");

const today = moment();

currentDayOutput.textContent = today.format("dddd, MMMM Do");
