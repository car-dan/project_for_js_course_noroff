
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.punkapi.com/v2/beers/" + id;

const beers = document.querySelector(".beers");

const title = document.querySelector("title");

const foodPairingContainer = document.querySelector(".foodPairing");

const ingredientsList = document.querySelector(".ingredientsList");




async function fetchBear() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        title.innerHTML = "";
        beers.innerHTML = "";
        ingredientsList.innerHTML = "";
        createHtml(details);
        console.log(details)
    }
     catch (error) {
         foodPairingContainer.innerHTML = " ";
         beers.innerHTML = `
         <div class = "error">
             <p>Something went wrong, please try again later</p>
              </div>`;
     }
}

fetchBear();
function createHtml(details) {
    for (let i = 0; i < details.length; i++) {
        
         
         const ingredients = details[i].ingredients;
        
        const yeast = ingredients.yeast;
        const hops = ingredients.hops;
        const malt = ingredients.malt;

        title.innerHTML = `${details[i].name}`

         beers.innerHTML += `
            <div class="beerBrand">
                <h1>${details[i].name}</h1>
                <img src="${details[i].image_url}" alt="${details[i].name}">
                <p>${details[i].description}</p>
                <h2>Brewers tips </h2>
                <p>${details[i].brewers_tips}</p>
                <h2>First brewed:</h2>
                <p> ${details[i].first_brewed}</p>
                <h2>Ingredients:</h2>
                
             </div>`
        
        ingredientsList.innerHTML += `<li>${yeast}</li>`
       
       

         
        for (let i = 0; i < hops.length; i++) {

            const amount = hops[i].amount;
            ingredientsList.innerHTML += `<li>${hops[i].name}
                                </li>`    
        }
        
        for (let i = 0; i < malt.length; i++) {
            const amount = malt[i].amount;
            ingredientsList.innerHTML += `<li>${malt[i].name}
                                </li>`    
            }
      
       
            
         
        
    }
}