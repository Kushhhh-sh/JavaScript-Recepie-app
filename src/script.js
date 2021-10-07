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
    let food = text.value;
    let apiLink = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${appID}&app_key=${apiKey}&random=true`;
    let response = await fetch(apiLink);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    addCard(data);
}

function addCard(data){
    let canvas = document.querySelector('#main');
    canvas.innerHTML = `
    <div class="card">
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[0].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[0].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[0].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[1].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[1].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[1].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[2].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[2].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[2].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[3].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[3].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[3].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div> 
    <div class="card">
        <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[4].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[4].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[4].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[5].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[5].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[5].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[6].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[6].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[6].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[7].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[7].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[7].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[7].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div> 
    <div class="card">
        <img src="${data.hits[8].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[8].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[8].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[8].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[9].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[9].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[9].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[9].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[10].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[10].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[10].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[10].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[11].recipe.image}" class="card-img-top" alt="${data.hits[0].recipe.label}">
            <div class="card-body">
                <h5 class="card-title">${data.hits[11].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[11].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[11].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div> 
    `
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

function getit() {
    sendApiRequest();
    let mealType = document.querySelector('#mealType').value;
    let diet = document.querySelector('#diet').value;
    let dish = document.querySelector('#dish').value;
    // console.log(mealType);
    // console.log(diet);
    // console.log(dish);
}
