const apiKey =  '428a95b212df9fb861cccf71f50f8d11';
const apiUrl =  'https://api.openweathermap.org/data/2.5/weather?&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const castUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';







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
     searchHistory();
     localS();
})
checkWeather(city);

async function day(city) {
    console.log(searchBox.value);
    const response = await fetch(castUrl + city + `&appID=${apiKey}`);
    var data = await response.json();
    console.log(data);
    console.log(data.list[6].main.temp)
    document.querySelector('#day1').innerHTML = data.list[8].dt_txt;
    var kel = data.list[6].main.temp;
    console.log(kel);
    var far = Math.round(1.8 * (kel - 273) + 32);
    console.log(far);
    document.querySelector('#d1t').innerHTML = far + '°F';
    // document.querySelector('#d1c').innerHTML = (data.list[8].weather[0].main);
    console.log(data.list[6].weather[0].main);
    // var day1cond = (data.list[8].weather.description);
    console.log(data.list[6].main.humidity);
    document.querySelector('.hum1').innerHTML = `Humidity${data.list[7].main.humidity}%`;
    console.log(data.list[6].wind.speed);
    document.querySelector('.wind1').innerHTML = `Wind${data.list[7].wind.speed}MPH`;

    document.querySelector('#day2').innerHTML = data.list[14].dt_txt;
    var kel2 = data.list[14].main.temp;
    var far2 = Math.round(1.8 * (kel2 - 273) + 32);
    document.querySelector('#d2t').innerHTML = far2 + '°F';
    document.querySelector('.hum2').innerHTML = `Humidity${data.list[14].main.humidity}%`;
    document.querySelector('.wind2').innerHTML = `Wind${data.list[14].wind.speed}MPH`;


    document.querySelector('#day3').innerHTML = data.list[21].dt_txt;
    var kel3 = data.list[21].main.temp;
    var far3 = Math.round(1.8 * (kel3 - 273) + 32);
    document.querySelector('#d3t').innerHTML = far3 + '°F';
    document.querySelector('.hum3').innerHTML = `Humidity${data.list[21].main.humidity}%`;
    document.querySelector('.wind3').innerHTML = `Wind${data.list[21].wind.speed}MPH`;

    document.querySelector('#day4').innerHTML = data.list[29].dt_txt;
    var kel4 = data.list[29].main.temp;
    var far4 = Math.round(1.8 * (kel4 - 273) + 32);
    document.querySelector('#d4t').innerHTML = far3 + '°F';
    document.querySelector('.hum4').innerHTML = `Humidity${data.list[29].main.humidity}%`;
    document.querySelector('.wind4').innerHTML = `Wind${data.list[29].wind.speed}MPH`;

    document.querySelector('#day5').innerHTML = data.list[37].dt_txt;
    var kel5 = data.list[37].main.temp;
    var far5 = Math.round(1.8 * (kel5 - 273) + 32);
    document.querySelector('#d5t').innerHTML = far3 + '°F';
    document.querySelector('.hum5').innerHTML = `Humidity${data.list[37].main.humidity}%`;
    document.querySelector('.wind5').innerHTML = `Wind${data.list[37].wind.speed}MPH`;


    
    var weatherIcon = document.createElement('img');
    const url = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', url);
    document.querySelector('.img1').append(weatherIcon);

    var weatherIcon = document.createElement('img');
    const url2 = `https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', url2);
    document.querySelector('.img2').append(weatherIcon);

    var weatherIcon = document.createElement('img');
    const url3 = `https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', url3);
    document.querySelector('.img3').append(weatherIcon);

    var weatherIcon = document.createElement('img');
    const url4 = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', url4);
    document.querySelector('.img4').append(weatherIcon);

    var weatherIcon = document.createElement('img');
    const url5 = `https://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', url5);
    document.querySelector('.img5').append(weatherIcon);

}






day(city);

// searchBtn.addEventListener('click', function(){
//     var thisCity = document.querySelector('.text');
//     var history = document.searchHistory.createElement('h5');
//     history.textContent = thisCity;


// })

function searchHistory () {
    var searchH = document.querySelector('.searchH');
    var history = document.createElement("h4");
    history.textContent = searchBox.value;
    searchH.append(history);
}

function localS () {
    var locale = searchBox.value;
    if (locale) {
    localStorage.setItem('history', locale);
    }
}
















