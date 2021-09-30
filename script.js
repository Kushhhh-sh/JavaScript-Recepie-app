let sendBtn = document.querySelector('#send');

sendBtn.addEventListener("click", () => {
    sendApiRequest();
})

let text = document.querySelector('#text');



async function sendApiRequest()
{
    let appID = "09565216";
    let apiKey = "8da93543da30ab74ed025d73ce97bf27";
    let food = text.value;
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${appID}&app_key=${apiKey}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
}