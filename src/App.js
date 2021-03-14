import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';

function App() {

  const [weather,setWeather] = useState([])
  const APIKEY = '2b8d083381d089ce9de9407764cecc7a'
  
  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city && country) {
        setWeather({
          data: apiData,
          city: apiData.name,
          country: apiData.sys.country,
          description: apiData.weather[0].description,
          temperature:  Math.round(apiData.main.temp-273.15),
          error:""
        }
        )} else {
          setWeather({
            data: '',
            city: '',
            country: '',
            description: '',
            temperature: '',
            error:"Please Type A City And Country"
        }
        )}
  }

  const resetdata = () => {
    document.getElementById("myForm").reset();
  }
  return (
    <div className="App">
  
        <h1>React Weather App</h1>
        <Form id = "myForm" getWeather={fetchData} />
        {/* <button type='button' onclick={resetdata}>Reset</button> */}
        <Weather
       city={weather.city}
       country={weather.country}
       description={weather.description}
       temperature={weather.temperature}
       error={weather.error}
      />
         {console.log(weather.data)}
    </div>
  );
}

export default App;
