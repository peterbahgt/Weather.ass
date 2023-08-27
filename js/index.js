var weather =[]

let cities= document.getElementById('cities');
let temp=document.getElementById('temp');
let todayIcon=document.getElementById('todayIcon');
let condition=document.getElementById('condition');
let day =document.getElementById('day');
let kiloPerHoure =document.getElementById('kiloPerHoure');
let windDirection=document.getElementById('windDirection');
let humidityPersent=document.getElementById('humidityPersent');
let nextDayMaxTemp=document.getElementById('nextDayMaxTemp');
let nextDayMinTemp=document.getElementById('nextDayMinTemp');
let nextDayDesc=document.getElementById('nextDayDesc');
let nextDayIcon=document.getElementById('nextDayIcon');

let thirdDayMaxTemp=document.getElementById('thirdDayMaxTemp');
let thirdtDayMinTemp=document.getElementById('thirdtDayMinTemp');
let thirdDayIcon=document.getElementById('thirdDayIcon');
let thirdDesc=document.getElementById('thirdDesc');

let firstDay=document.getElementById('firstDay')
let secondDay=document.getElementById('secondDay')
let thirdDay=document.getElementById('thirdDay')

let currentDate=document.getElementById('currentDate');

var search=0;


async function getWeather(country='cairo'){
    var response=  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e34cd4dd46884d30983114130230708&q=${country}&days=3`);
    response=await response.json();
    weather=response;
    console.log(weather)
    cities.innerHTML=weather.location.name;
    temp.innerHTML=weather.current.temp_c+"<sup>o</sup>C";
    condition.innerHTML=weather.current.condition.text;
    let scrImg=weather.current.condition.icon;
    console.log(scrImg)
    todayIcon.setAttribute('src',scrImg)
    kiloPerHoure.innerHTML=weather.current.wind_kph+"km/h";
    windDirection.innerHTML=weather.current.wind_dir;
    humidityPersent.innerHTML=weather.current.humidity+"%";

    nextDayMaxTemp.innerHTML=weather.forecast.forecastday[1].day.maxtemp_c+"<sup>o</sup>C";
    nextDayMinTemp.innerHTML=weather.forecast.forecastday[1].day.mintemp_c+"<sup>o</sup>";
    nextDayDesc.innerHTML=weather.forecast.forecastday[1].day.condition.text;
    let nextDaySrcImg=weather.forecast.forecastday[1].day.condition.icon;
    console.log(nextDaySrcImg)
    nextDayIcon.setAttribute('src',nextDaySrcImg);

    thirdDayMaxTemp.innerHTML=weather.forecast.forecastday[2].day.maxtemp_c+"<sup>o</sup>C";
    thirdtDayMinTemp.innerHTML=weather.forecast.forecastday[2].day.mintemp_c+"<sup>o</sup>";
    let thirdDayImg=weather.forecast.forecastday[2].day.condition.icon;
    thirdDayIcon.setAttribute('src',thirdDayImg);
    thirdDesc.innerHTML=weather.forecast.forecastday[2].day.condition.text;

    firstDay.innerHTML=getDayOfWeek(weather.forecast.forecastday[0].date);
    secondDay.innerHTML=getDayOfWeek(weather.forecast.forecastday[1].date);
    thirdDay.innerHTML=getDayOfWeek(weather.forecast.forecastday[2].date);
    currentDate.innerHTML=weather.forecast.forecastday[0].date;
}
getWeather()




function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

    return dayOfWeek;
}

document.querySelector('#locationSearch').addEventListener('input',function(){
    console.log(this.value)
    getWeather(this.value)
})