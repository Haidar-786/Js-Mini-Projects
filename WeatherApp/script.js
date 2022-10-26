const API_KEY = "aca7256f256e922e93b23a6ac85c1cbb";


const getCurrentWeatherData = async()=>{
    const city = "AndhraPradesh";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY} &units=metric`);
         
    return response.json()
}