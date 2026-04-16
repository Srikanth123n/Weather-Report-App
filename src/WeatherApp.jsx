import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState(null);

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ marginBottom: "20px" }}>Weather App</h1>

            <SearchBox updateInfo={setWeatherInfo} />

            <InfoBox info={weatherInfo} />
        </div>
    );
}