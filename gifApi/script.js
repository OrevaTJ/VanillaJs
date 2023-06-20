const button = document.querySelector('button');
const input = document.querySelector('input');
const img = document.querySelector('img');
const p = document.querySelector('p');
button.addEventListener('click', fetchApi)

function getInput() {
    return input.value;
}

function fetchApi() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dKCOEURFVuLXwRJ7OuJeOZ1TPUBKZojB&s=${getInput()}`, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
    console.log(response.data.images.original.url)
    img.src = response.data.images.original.url
    })
}