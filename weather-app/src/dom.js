import getData from "./weather";

const text = document.getElementById('text');
const city = document.getElementById('name');
const humid = document.getElementById('humidity');
const date = document.getElementById('date');
const feels = document.getElementById('feels');
const temperatureC = document.getElementById('temp-c');
const temperatureF = document.getElementById('temp-f');
const wind = document.getElementById('wind');
const input = document.querySelector('input');
const container = document.querySelector('.container');
document.getElementById('year').innerHTML = new Date().getFullYear()

async function domElements() {
    const data = await getData();
    container.style.display = 'block';

    console.log(data.current.condition.text);
    text.textContent = data.current.condition.text;
    city.textContent = `${data.location.name}, ${data.location.country}`;
    humid.textContent = `Humidity: ${data.current.humidity}%`;
    date.textContent = `As at: ${data.current.last_updated}`;
    temperatureC.textContent = `${data.current.temp_c}C`;
    feels.textContent = `Feels like ${data.current.feelslike_c}C`;
    temperatureF.textContent = `${data.current.temp_f}F`;
    wind.textContent = `Wind speed: ${data.current.wind_kph} km/h`;
}

function getInput() {
    return input.value;
}

export { domElements, getInput };