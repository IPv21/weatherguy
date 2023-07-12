const apiKey =  '428a95b212df9fb861cccf71f50f8d11';
const apiUrl =  'https://api.openweathermap.org/data/2.5/weather?&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const castUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='





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
    // 'city' is coming from searchBox.value
    checkWeather(searchBox.value);
     day(searchBox.value);
})
checkWeather(city);

async function day(city) {
    const response = await fetch(castUrl + city + `&appID=${apiKey}`);
    var data = await response.json();
    console.log(data);
    console.log(data.list[9].main.temp)
    document.querySelector('#day1').innerHTML = data.list[8].dt_txt;
    var kel = data.list[8].main.temp;
    console.log(kel);
    var far = Math.round(1.8 * (kel - 273) + 32);
    console.log(far);
    document.querySelector('#d1t').innerHTML = far + '°F';
    // document.querySelector('#d1c').innerHTML = (data.list[8].weather[0].main);
    console.log(data.list[6].weather[0].main);
    var day1cond = (data.list[8].weather.description);
    document.querySelector('.day1c').innerHTML = day1cond;

    // console.log( 'https://openweathermap.org/img/wn/' + (data.list[8].weather[0].icon));
    // var conditions =  'https://openweathermap.org/img/wn/' + (data.list[8].weather[0].icon);
    // document.querySelector('#d1c').innerHTML = conditions;

    var weatherIcon = document.day-forecast.createElement('img');
    weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png');


    




}

day(city);







