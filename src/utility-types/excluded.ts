type Weather = "sunny" | "cloudy" | "rainy"

function filterWeather(
    weatherConditions: Weather[],
    excludedWeather: Exclude<Weather, "rainy">
): Weather[] {
    return weatherConditions.filter((condition) => condition !== excludedWeather)
}

const allWeather: Weather[] = ["sunny", "cloudy", "rainy", "sunny"]

const filteredWeather = filterWeather(allWeather, "rainy" as Exclude<Weather, "rainy">)

console.log(filteredWeather);
