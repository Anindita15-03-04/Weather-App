const apikey = "5caa160b8d8acec0fb577aed9189cf19";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const weatherIcon =document.querySelector(".weather-icon")

        async function checkWeather(city){
            const response = await fetch(apiUrl +  city + `&appid=${apikey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector("weather").style.display = "none";
            }else{

            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°c" ;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".weatherUpdate").innerHTML = "Weather: " + data.weather[0].main;

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "cloudy.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "sun.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "mist.png";
            }
            else if(data.weather[0].main == "Thunder"){
                weatherIcon.src = "thunder.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "snow.png";
            }

            document.querySelector(".weather").style.display = "block";
        }
        }
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})        
        