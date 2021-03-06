var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cb577e6b8d77df016b4072dc0591acc3&units=imperial';

// cb577e6b8d77df016b4072dc0591acc3

module.exports = {
    // async function
    getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function (res) {
        throw new Error("Unable to get weather for the location.");
      });
    }
}
