import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {

    if (!info) {
        return <h3>Search for a city</h3>;
    }

    const weatherData = {
        rain: {
            img: "https://images.unsplash.com/photo-1501696461415-6bd6660c6742",
            desc: "Rainy weather, carry an umbrella ☔"
        },
        clouds: {
            img: "https://images.unsplash.com/photo-1534088568595-a066f410bcda",
            desc: "Cloudy sky, calm atmosphere ☁️"
        },
        clear: {
            img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
            desc: "Clear sky, bright sunshine ☀️"
        },
        mist: {
            img: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227",
            desc: "Foggy weather, low visibility 🌫️"
        },
        hot: {
            img: "https://images.unsplash.com/photo-1504376379689-8d54347b26c3",
            desc: "Very hot weather, stay hydrated 🔥"
        },
        cold: {
            img: "https://images.unsplash.com/photo-1608889175111-4c3f3d0b3f3b",
            desc: "Cold weather, wear warm clothes ❄️"
        }
    };

    
    const getWeatherType = (weather, temp) => {
        weather = weather.toLowerCase();

        if (weather.includes("rain")) return "rain";
        if (weather.includes("cloud")) return "clouds";
        if (weather.includes("clear")) return "clear";
        if (weather.includes("mist") || weather.includes("fog")) return "mist";

        if (temp > 30) return "hot";
        if (temp < 15) return "cold";

        return "clear";
    };

    const type = getWeatherType(info.weather, info.temp);
    const data = weatherData[type];

    return (
        <div className="InfoBox">
            <h3>Weather Info</h3>

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        sx={{ height: 140 }}
                        image={data.img}
                    />

                    <CardContent>

                        <Typography variant="h5">
                            {info.city}
                        </Typography>

                        <Typography variant="h6">
                            {info.temp}°C
                        </Typography>

                        <Typography>
                            {data.desc}
                        </Typography>

                        <Typography>
                            🌤 {info.weather}
                        </Typography>

                        <Typography>
                            🌡 Max: {info.tempMax}°C | ❄ Min: {info.tempMin}°C
                        </Typography>

                        <Typography>
                            🤒 Feels Like: {info.feelsLike}°C
                        </Typography>

                        <Typography>
                            💧 Humidity: {info.humidity}%
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}