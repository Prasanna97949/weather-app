import { useState } from "react";
import axios from "axios";

function App() {
  const [city,setcity]=useState("")
  const [weathe,setweathe]=useState("")
  const [temp,settemp]= useState("")
  const [des,setdes]=useState("")
  function handlecity(evt){
    setcity(evt.target.value)
  }
  function getweather(){
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efe0b956e513b1217ad609add553e0e`)
    weather.then(function(success){
      console.log(success.data)
      setweathe(success.data.weather[0].main)
      settemp(success.data.main.temp)
      setdes(success.data.weather[0].description)
    })
  }
  return (
    <div className="bg-black py-5 px-6">
      <div className="bg-blue-200 py-5 px-6 border rounded">
        <h1 className="text-3xl font-medium">Weather Report</h1>
        <p>I Can Give You a Weather Report About Your City !</p>
        <input value={city} onChange={handlecity} className="p-2 border rounded-md mt-1" type="text" placeholder="Enter your City Name" /><br />
        <button onClick={getweather} className="bg-black text-white rounded-md mt-2 p-2">Get Report</button>
        <h2 className="mt-1 font-medium">Weather:  {weathe}</h2>
        <h2 className="mt-1 font-medium">Temperature:{temp}°</h2>
        <h2 className="mt-1 font-medium">Description:  {des}</h2>
      </div>
    </div>
  );
}

export default App;
