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
        const blockRow = $(`<div class="row time-block">`);

        blockRow.append(`<div class='col-lg-2 hour'>9AM</div>`)
        blockRow.append(`<div class='col-lg-8'><textarea name='input-text' id='input-text'></textarea></div>`)
        blockRow.append(`<div class="col-lg-2 "><button class="saveBtn"><i class="fa-solid fa-floppy-disk"></i></button></div>`)

        blocksContainer.append(blockRow);
    }

}



