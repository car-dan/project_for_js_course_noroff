const url = "https://api.punkapi.com/v2/beers";
const beers = document.querySelector(".beers");


async function fetchCharacter() {
    
    try {
        const response = await fetch(url);
        const details = await response.json();
        beers.innerHTML = "";

       console.log(details);
        createHtml(details);
       
    }
    catch (error) {
        console.log(error);
        beers.innerHTML = `
        <div class = "error">
            <p>Something went wrong, please try again</p>
             </div>`;
    }
}

fetchCharacter();

function createHtml(details) {
    
     for (let i = 0; i < details.length; i++) {
            
            beers.innerHTML += `<a href ="details.html?id=${details[i].id}"><div class="beerType">
            <h2>${details[i].name}</h2>
            
             
             <img src="${details[i].image_url}" alt="${details[i].name}">
             <p>${details[i].tagline}</p>
             </div></a>`
        
    }
}
