import { useState } from 'react'
import './index.css'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData]=useState([]);
  const [location, setLocation]=useState("");

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0bdc3b6ae854393ad3cb12664eb0d110`

  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data);
      })
      setLocation('');
    }
  }

  
  return (
    <>
      <div className="app">
      <div className="search">
        <input 
        placeholder='Enter city name'
        value={location}
        onChange={(event)=>
          setLocation(event.target.value)}  
        onKeyDown={searchLocation}
        type="" />
        </div>
        <div className="container">
          <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp}°F</h1> : null }
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p>: null }
              </div>
          </div>

          {data.name!=undefined && (
          <div className="bottom">
              <div className="feels">
                <p className='bold'>
                {data.main ? <p>{data.main.feels_like} <span> °F</span></p> : null}
                </p>
                <p>Feels like</p>
              </div>
              <div className="humidity">
                <p className='bold'>{data.main ? <p>{data.main.humidity} <span>%</span></p>:null }</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className='bold'>
                {data.wind ? <p>{data.wind.speed }<span> MPH</span></p>:null }
                </p>
                <p>Wind Speed</p>
              </div>
          </div>  
          )}
          
        </div>
      </div>
    </>
  )
}

export default App


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=0bdc3b6ae854393ad3cb12664eb0d110

//

