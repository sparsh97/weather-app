import { useRef, useState } from "react";
import "./App.css";
import Card from "./component/Card";
import { environment } from "./environment/environment";
function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const searchRef = useRef();
  const onSubmit = () => {
    if (searchRef.current?.value == null || searchRef.current?.value == "") {
      alert("Please enter city or country");
      return;
    }
    fetch(environment?.watherUrl+`?key=${environment?.apiKey}&q=${searchRef.current?.value}&aqi=no`)
    .then(weather => weather.json())
    .then(weather => setWeatherInfo(weather))
    .catch(err => console.log("some error occured"));
  }
  return (
    <>
      <div className="grid place-content-center h-screen  bg-slate-500">
        <div className="text-white font-semibold flex justify-center">WEATHER APP</div>
        <div>
          <input
            className="p-2 m-1 rounded-lg"
            placeholder="Search city or country....."
            type="search"
            name="Search"
            id="search"
            ref={searchRef}
            onChange={()=> setWeatherInfo({})}
          />
          <button 
            className="bg-blue-400 text-center text-white rounded-md hover:bg-white hover:text-black text-base font-medium p-2 m-1 w-[5rem]"
            onClick={onSubmit}>
            Search
          </button>
        </div>
        <div className="flex justify-center align-middle">
          <Card weatherInfo={weatherInfo}/>
        </div>
      </div>
    </>
  );
}

export default App;
