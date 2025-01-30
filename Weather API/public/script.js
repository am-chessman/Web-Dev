


const cityName = null;
const stateCode = null;
const countryCode = null;
const limit = null;

const ApiKey = "93c9563c219fd26bcf5872a459d436c0";

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${ApiKey}`)