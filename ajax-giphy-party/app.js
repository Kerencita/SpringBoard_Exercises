console.log("Let's get this party started!");

//ADDING EVENT LISTENER TO FORM SUBMIT BUTTON//
$('#submit-btn').click(function(event){
    event.preventDefault();
    const searchtext = $('#search-bar').val()
    $('#search-bar').val('')
    getGIF(searchtext);
})

//REMOVES GIFS FROM THE BOARD WHEN DELETE BUTTON IS CLICKED//
$('#delete-btn').click(function(event){
    $('#gif-board').children().remove();
})

//GETS RANDOM TRENDING GIF WHEN BUTTON IS CLICKED//
$('#random-btn').click(function(event){
    randomGIF();
})

async function getGIF (searchterm){
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', 
    {params: {
        api_key: 'H8SLL1Ddg2TqchCh0eMVS1UlVP72uTM2',
        q: searchterm,
    }})
    console.log(response);
    const randomIndex = randomNumber();
    const responseurl = response.data.data[randomIndex].images.original.url;
    postGIF(responseurl);
}


function postGIF(url){
    $('#gif-board').append(`<img src="${url}">`);
}

function randomNumber(){
    return Math.round(Math.random()*50);
}


async function randomGIF (){
    const response = await axios.get('https://api.giphy.com/v1/gifs/trending', 
    {params: {
        api_key: 'H8SLL1Ddg2TqchCh0eMVS1UlVP72uTM2',
    }})
    console.log(response);
    const randomIndex = randomNumber();
    const responseurl = response.data.data[randomIndex].images.original.url;
    postGIF(responseurl);
}


///ADD ERROR HANDLING WHEN GIF IS NOT FOUND///

