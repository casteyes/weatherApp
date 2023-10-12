let apiKey = "e4733cdac3f00b19e5f6d0ce4f432d8a";
let city = document.getElementById('myValue');



displayTime();
//document.getElementById('thisButton').addEventListener("click", apiClick);
document.getElementById('thisForm').addEventListener("submit", apiClick);


async function apiClick(e) {
    try {
        e.preventDefault();
        console.log(apiClick);
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=imperial`;

        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);

        let iconCode = data.weather[0].icon;
        let iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;


        document.getElementById('name').textContent = data.name;
        document.getElementById('wIcon').src = iconURL;
        document.getElementById('wDescription').textContent = data.weather[0].description;
        document.getElementById('temp').textContent = data.main.temp + String.fromCharCode(176) + " " + "F";
        document.getElementById('humidity').textContent = "Humidity" + " " + data.main.humidity + "" + "%";
        document.getElementById('windSpeed').textContent = "Wind Speed" + " " + data.wind.speed + " " + "mph";


        switch (iconCode) {
            case "01d":
                document.querySelector('.container').style.cssText = "background:url('images/Sunny.png'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "01n":
                document.querySelector('.container').style.cssText = "background:url('images/clearNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "02d":
                document.querySelector('.container').style.cssText = "background:url('images/cloudyDay.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "02n":
                document.querySelector('.container').style.cssText = "background:url('images/cloudyNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "03d":
                document.querySelector('.container').style.cssText = "background:url('images/cloudyDay.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "03n":
                document.querySelector('.container').style.cssText = "background:url('images/cloudyNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "04d":
                document.querySelector('.container').style.cssText = "background:url('images/cloudyDay.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "04n":
                document.querySelector('.container').style.cssText = "background:url('images/cloudyNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "09d":
                document.querySelector('.container').style.cssText = "background:url('images/rainyDay.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "09n":
                document.querySelector('.container').style.cssText = "background:url('images/rainyNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "10d":
                document.querySelector('.container').style.cssText = "background:url('images/rainyDay.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "10n":
                document.querySelector('.container').style.cssText = "background:url('images/rainyNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "11d":
                document.querySelector('.container').style.cssText = "aqua";
                break;
            case "11n":
                document.querySelector('.container').style.cssText = "background:url('images/thunderstormNight.jpg'); background-repeat: no-repeat; background-size:cover;";
                break;
            case "13d":
                document.querySelector('.container').style.cssText = "cadetblue";
                break;
            case "13n":
                document.querySelector('.container').style.cssText = "crimson";
                break;
            case "50d":
                document.querySelector('.container').style.cssText = "darkgreen";
                break;
            case "50n":
                document.querySelector('.container').style.background = "darkslategray";
                break;
        }

        city.value = '';
    } catch {
        alert('Please type in a valid city.');
    }
}



function displayTime(){

    setInterval(() => {
        let time = document.getElementById('current-time');
        let d = new Date();
        time.textContent = d.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    }, 1000)

    
}