let sendBtn = document.querySelector('.btn-outline-warning');

sendBtn.addEventListener("click", () => {
    sendApiRequest();
})

let text = document.querySelector('.form-control');

async function sendApiRequest()
{
    let appID = "da6de1c9";
    let apiKey = "9b0eee5277b530b10d327f7a42ddcb1e";
    let food = text.value;
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${appID}&app_key=${apiKey}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    addCard(data);
}

function addCard(data){
    let canvas = document.querySelector('#main');
    canvas.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[0].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[0].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[1].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[1].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[2].recipe.label}</h5>
                <p class="card-text">Cuisine Type: ${data.hits[2].recipe.cuisineType}<br>Dish Type: ${data.hits[2].recipe.dishType}<br>Meal Type: ${data.hits[2].recipe.mealType}</p>
                <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go somewhere</a>
            </div>
    </div> `
}