const CONTAINER = document.querySelector(".container");

let newHTML = "";



for (let i = 0; i < actionGames.length; i++) {
    let ratingValue = "Not Rated"

    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    }

    const GENRES = actionGames[i].genres; 
    const genreHTML = makeGenres(GENRES);
    const PLATFORMS = actionGames[i].platforms;
    const platformsHTML = makePlatforms(PLATFORMS);
    // console.log(platforms);
    

    const DETAILS = `
    <div class="card">
        <div class="image" style="background-image: url(${actionGames[i].background_image});">
        </div>
        <div class="details">    
            <h4> ${actionGames[i].name} </h4>
            <div class="rating">${ratingValue}</div>
            ${genreHTML}
            <div>${platformsHTML}</div>
        </div>       
    </div>`;

    newHTML += DETAILS;
}


function makeGenres (genreArray) {
    let genreHTML = "";
    for (let i = 0; i < genreArray.length; i++) {
        genreHTML += `<a class ="genre">${genreArray[i].name}</a>`;
       
    }
    return genreHTML;
}

CONTAINER.innerHTML = newHTML;



//Creating the platforms HTML
function makePlatforms (platformsArray) {
    let platformsHTML = "";
    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<span class="platform">${platformsArray[i].platform.name}</span>`
    }
    return platformsHTML;
}

