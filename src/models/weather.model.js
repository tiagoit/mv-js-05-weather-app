class WeatherModel {
  constructor(data) {
    this.name = data.name;
    this.max = data.main.temp_max;
    this.min = data.main.temp_min;
    this.temp = data.main.temp;
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;
    this.icon = data.weather[0].icon;
    this.description = data.weather[0].description;
    this.giphyUrl = undefined;
  }
}

export default WeatherModel;
