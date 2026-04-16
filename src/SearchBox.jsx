import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const API_KEY = "7698a9109854fb62b1cb2f1bc221baf9"; 

    const getWeatherInfo = async () => {
        try {
            let res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            let data = await res.json();

            let result = {
                city: data.name,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description
            };

            updateInfo(result);

        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" justifyContent="center">

                <TextField
                    label="Enter City"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                /> 
                <br></br>
                <Button variant="contained" type="submit">
                    Search
                </Button>

            </Stack>
        </form>
    );
}