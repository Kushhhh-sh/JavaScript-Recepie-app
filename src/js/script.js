let sendBtn = document.querySelector('.btn-warning');
let text = document.querySelector('.form-control');
let appID = "da6de1c9";
let apiKey = "9b0eee5277b530b10d327f7a42ddcb1e";

text.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendBtn.click();
    }
});

sendBtn.addEventListener("click", () => {
    sendApiRequest();
})

async function sendApiRequest()
{
    let mealType = document.querySelector('#mealType').value;
    let diet = document.querySelector('#diet').value;
    let dish = document.querySelector('#dish').value;
    let food = text.value;
    let apiLink = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${appID}&app_key=${apiKey}&random=true`;
    if(mealType !== "")
        apiLink = apiLink + `&mealType=${mealType}`;

    if(dish !== "")
        apiLink = apiLink + `&dishType=${dish}`;

    if(diet !== "")
        apiLink = apiLink + `&diet=${diet}`;

    fetch(apiLink).then(responses => responses.json()).then(data => addCard(data))
}

function addCard(data) {
    let canvas = document.querySelector('#main');
    let canvasHTML = "";
    let vegNonVeg = new Array(12);
    for (let i = 0; i < vegNonVeg.length; i++) {
        if (data.hits[i].recipe.healthLabels.includes('Vegetarian')) {
            vegNonVeg[i] = 'veg.svg'
        } else {
            vegNonVeg[i] = 'non-veg.svg'
        }
        
    }
    // console.log(vegNonVeg);

    for (let i = 0; i < 20; i++) {
        canvasHTML += `
        <div class="card">
            <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="${data.hits[i].recipe.label}">
                <div class="card-body">
                    <h5 class="card-title">${data.hits[i].recipe.label}</h5>
                    <p class="card-text">Cuisine Type: ${data.hits[i].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}<br>Veg/Non Veg: <img src="src/img/${vegNonVeg[i]}" alt="" class="veg-non-veg-img"></p>
                    <a href="${data.hits[i].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
                </div>
        </div>
        `
    }
    canvas.innerHTML = canvasHTML;
}

let filter = document.querySelector('.btn-secondary');
let close = document.querySelector('.fa-times');
let filterBox = document.querySelector('.filters')

filter.addEventListener("click", () => {
    filterBox.style.display = "block";
})

close.addEventListener("click", () => {
    filterBox.style.display = "none";
})