let colour=document.querySelector("#mode");
let currMode=0; 
colour.addEventListener("click",()=>{
    if(currMode==0){
        currMode=1;
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode=0;
        document.querySelector("body").style.backgroundColor="white";
    }
});
const apiKey="6a9cda4dd1ac10e11f5a03b62c91cae1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon")

   async function checkWeather(city){ 
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`); 
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        console.log(data);
       document.querySelector(".city").innerHTML=data.name ;
       document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
       document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
       document.querySelector(".wind").innerHTML=data.wind.speed + "Km/hr";
    
       if(data.weather[0].main=="Cloud"){
        weatherIcon.src="clouds.png"; 
       }
       else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png"; 
       }
       else if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png"; 
       }
       else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png"; 
       }
       else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png"; 
       }
       else if(data.weather[0].main=="Rain"){
        weatherIcon.src="ain.png"; 
       }
       document.querySelector(".error").style.display="none"
          document.querySelector(".weather").style.display="block";
    }
 
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
