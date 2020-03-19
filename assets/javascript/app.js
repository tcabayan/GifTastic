$(document).ready(function () {
    setButtons(actorArray, 'searchButton', '#buttonsArea')

});

//set up array that will populate the buttons
var actorArray = ["Ryan Reynolds", "Julia Roberts", "Jack Nicholson", "Audrey Hepburn", "Leonardo DiCaprio"];

//set up buttons and have the buttons house variables from array of actors stored in the variable "actorArray"
function setButtons(actorArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < actorArray.length; i++) {
        var memebtn = $('<button class="btn btn-primary">');
        memebtn.addClass(classToAdd);
        memebtn.attr('data-type', actorArray[i]);
        memebtn.text(actorArray[i]);
        $(areaToAddTo).append(memebtn);
    }
};













