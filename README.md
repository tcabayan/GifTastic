# GifTastic
In this assignment, I used the GIPHY API to make a dynamic web page that populates with gifs of actors. 

Initially I created an array of strings, each one related to a particular actor/actress. This was saved to a variable called topics.

I took the topics in this array and created buttons in my HTML.

When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

Note I have also added a form to my page that takes a value from a user input box and adds it to my topics array and also mades a function call that takes each topic in the array and remakes the buttons on the page.