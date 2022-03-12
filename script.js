const currentDayOutput = $("#currentDay");
const blocksContainer = $(".container");
const startBlock = 9 // 9AM - 5PM

// current date
const today = moment();

// display current date - format: Saturday, March 12th
currentDayOutput.textContent = today.format("dddd, MMMM Do");

$(document).ready(loadTimeBlocks);

function loadTimeBlocks() {

    // 9 - 17 will create 9 blocks
    for(let i=startBlock; i<=17; i++) {
        let hour = i; // 24 hour format

        const hours = convertHours(hour);
        
        const backgroundColor = detectHour(hour); 

        const blockRow = $(`<div class="row time-block">`);

        blockRow.append(`<div class='col-lg-2 hour'>${hours}</div>`)
        blockRow.append(`<div class='col-lg-8 ${backgroundColor}'><textarea name='input-text' id='input-text'></textarea></div>`)
        blockRow.append(`<div class="col-lg-2 "><button class="saveBtn"><i class="fa-solid fa-floppy-disk"></i></button></div>`)

        blocksContainer.append(blockRow);
    }

}

function detectHour(hour) {
    let blockColor;
    const currentHour = today.format("H"); // 24 hour format

    if (hour > currentHour) {
        blockColor = "future";
    } else if (hour < currentHour) {
        blockColor = "past";
    } else {
        blockColor = "present"
    }

    return blockColor;
}

// convert hours from 24 hour to 12 hour format
function convertHours(hour) {
    let convertedHours = hour % 12;

    // 0 -> 12PM
    if (convertedHours === 0) {
        convertedHours += 12;
    }

    return convertedHours;
}



