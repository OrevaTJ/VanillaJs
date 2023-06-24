import { getInput } from "./dom";


async function getData() {
    const input = getInput();
    const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=66a64a49c5324e0e8eb152621232006&q=${input}&aqi=no`, {mode: 'cors'});
    const cityData = await weatherData.json();
    console.log(cityData);
    return cityData;
}

export default getData