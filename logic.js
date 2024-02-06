
const api_key = 'a53b7fc9e49116fc6e8b6419c6349684';
const api_url = 'https://api.openweathermap.org/data/2.5/weather';
const search = document.querySelector('#search');
let input = document.getElementById('text');
const weatherimg = document.getElementById('img');
const wea = document.querySelector('.weather');
let input1=document.querySelector('input');


const cheakweather = async (city) => {
    const respon = await fetch(api_url + `?q=${city}&appid=${api_key}&units=metric`);
    if (respon.status == 404) {
    document.querySelector('.error').style.display = 'block';
    } else 
    {
        let result = await respon.json();
        if (result.weather[0].main == "Clear") {
            weatherimg.style.backgroundImage = `url("img/sun.png")`;
        } 
        else if (result.weather[0].main == "Haze") {
            weatherimg.style.backgroundImage = `url("img/mist.png")`;
        } 
        else if (result.weather[0].main == "Clouds") {
            weatherimg.style.backgroundImage = `url("img/cloud.png")`;
        } 
        else if (result.weather[0].main == "Snow") {
            weatherimg.style.backgroundImage = `url("img/snow.jpg")`;
        } 
        else if (result.weather[0].main == "Rain") {
            weatherimg.style.backgroundImage = `url("img/sunnyrain.jpg")`;
        }
        let temp = Math.floor(result.main.temp);
        let wind = result.wind.speed;
        let humidity = result.main.humidity;
        document.getElementById('city').innerHTML = result.name;
        document.getElementById('temp').innerHTML = `${temp}ºC`;
        document.getElementById('humid').innerHTML = `${humidity}%`;
        document.getElementById('wnd').innerHTML = `${wind} km/h`;
        wea.style.display = "contents";
          console.log(result);
    }
}
search.addEventListener('click', () => {
    
    cheakweather(input.value);
});

