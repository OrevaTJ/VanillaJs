const button = document.querySelector('button');
const input = document.querySelector('input');
const img = document.querySelector('img');
const p = document.querySelector('p');
button.addEventListener('click', fetchApi)

function getInput() {
    return input.value;
}

function clearErr() {
    return p.textContent = ''
}

async function fetchApi() {
    try {
        clearErr()
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=dKCOEURFVuLXwRJ7OuJeOZ1TPUBKZojB&s=${getInput()}`, {mode: 'cors'})
        const source = await response.json();
        console.log(source)
        img.src = source.data.images.original.url
    } catch (error) {
        console.log(error.message)
        p.textContent = 'Enter Keyword'
    }
}