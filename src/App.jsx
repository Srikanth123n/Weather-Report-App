import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <>
      
      <WeatherApp />
    </>
  );
}

export default App;