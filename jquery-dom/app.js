//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$('document').ready(function(){
    console.log("Lets get ready to party with jQuery!")
})

//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center')

//Remove the last paragraph in the article.
$('p').eq(-1).remove()

//Set the font size of the title to be a random pixel size from 0 to 100
const pixel = Math.round(Math.random()*100);
$('#title').css('font-size', pixel)

//Add an item to the list; it can say whatever you want.
$('ol').append('<li>PUPPY PAWS!</li>')

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').html('')
$('aside').html('<p>I am sorry for having had a list here</p>')

//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('#input-form').on('click', 'input', function(){
    $('body').css('background-color', `rgb(${$('input').eq(0).val()},${$('input').eq(1).val()},${$('input').eq(2).val()})`)
})

//Add an event listener so that when you click on the image, it is removed from the DOM.
$('body').on('click', 'img', function(){
    $(this).remove()
})