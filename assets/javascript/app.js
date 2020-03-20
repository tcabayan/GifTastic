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

//set up what happens once you enter an actor's name in the search box and click the "submit" button
$(document).on('click', '.searchButton', function () {
    $('#searches').empty();
    //assign data attribute to search
    var person = $(this).attr('data-type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=GH7DyynVtQEUOCr5U0HJQ2yBI7biIXMM&limit=10";
    
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    
    // After the data from the AJAX request comes back
        .then(function (response) {

        //getting images and ratings from API and setting up their layout
            for (var i = 0; i < response.data.length; i++) {

        //display gif images and ratings
                $('#search-input').empty();
                var gifDiv = $('<div class= "card" id= "search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating: ' + rating).css({
                    "visibility": "visible",
                    "display": "block",
            });

            //variable for gif while moving
            var animated = response.data[i].images.fixed_height.url;

            // variable for gif while stopped
            var still = response.data[i].images.fixed_height_still.url;

            //// Creating and storing an image tag and assiging attributes to image searched for to make into gif
            var image = $('<img>');
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animated', animated);
            image.attr('data-state', 'still');
            image.addClass('gifImage');

            //attaching rating to bottom of div
            gifDiv.append(p);
            //attaching image to top of div
            gifDiv.prepend(image);
            $('#searches').append(gifDiv);
        }
    })
})

//function for animating gif when user clicks
$(document).on('click', '.gifImage', function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

//function for adding new button to actor array once an actor's name is submitted
$('.btn').on('click', function (event) {

    event.preventDefault();
    var newSearch = $('input').eq(0).val().trim();
    actorArray.push(newSearch);
    setButtons(actorArray, 'searchButton', '#buttonsArea');
    
});











