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
}