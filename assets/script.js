const apiKey =  '428a95b212df9fb861cccf71f50f8d11';
const apiUrl =  'https://api.openweathermap.org/data/2.5/weather?&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button')



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'MPH';
    var kel = data.main.temp;
    console.log(kel);
    var far = Math.round(1.8 * (kel - 273) + 32);
    console.log(far);
    document.querySelector('.temp').innerHTML = far;
}    

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
checkWeather(city);



