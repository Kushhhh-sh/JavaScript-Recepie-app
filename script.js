let sendBtn = document.querySelector('.btn-warning');
let text = document.querySelector('.form-control');
let appID = config.apiID;
let apiKey = config.apiKey;

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
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${appID}&app_key=${apiKey}`);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    addCard(data);
}

function addCard(data){
    let canvas = document.querySelector('#main');
    canvas.innerHTML = `
    <div class="card">
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[0].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[0].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[0].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[1].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[1].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[1].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[2].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[2].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[2].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div>
    <div class="card">
        <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[3].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[3].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[3].recipe.url}" class="btn btn-primary" target="_blank">See Recipe</a>
            </div>
    </div> `
}
