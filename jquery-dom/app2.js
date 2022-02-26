$('#movie-form').on('submit', function(event){
    event.preventDefault()
    addMovieRating();
})

function addMovieRating (){
    let movieTitle = $('#movie-title').val()
    let movieRating = $('#movie-rating').val()
    $('div').append(`<li> MOVIE: ${movieTitle} RATING: ${movieRating} <input id = "remove-btn" type="submit" value="remove"></li>`)
}


$('div').on('click', '#remove-btn', function(){
    console.log('removebtn clicked')
    $(this).parent().remove()
})