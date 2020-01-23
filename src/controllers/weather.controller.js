import WeatherView from '../views/weather.view';
import WeatherModel from '../models/weather.model';
import AppService from '../app.service';

class WeatherController {
  constructor() {document
    this.API_KEY = '';
    this.GIPHY_API_KEY = '';
    this.unit = 'imperial';
    this.tag = 'app-weather';
    this.render();
  }

  async fetchWeather(city) {
    AppService.loading(true);
    this.weather = null;
    this.render();
    AppService.message('');
    const cityWeatherEl = document.querySelector('.city-weather');
    cityWeatherEl && cityWeatherEl.classList.add('hidden');

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=${this.unit}`;
    try {
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      if (data.cod === '404') {
        return AppService.message('City not found');
      }

      this.weather = new WeatherModel(data);
      await this.fetchGiphy();
    } catch (error) {
      AppService.message('Error fetching the Open Weather API, try again later.');
    } finally {
      AppService.loading(false);
      this.render();
    }
    return true;
  }

  async fetchGiphy() {
    const description = this.weather.description.trim().split(' ').join('-');
    const giphyUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${this.GIPHY_API_KEY}&s=nature-${description}`;
    try {
      const response = await fetch(giphyUrl, { mode: 'cors' });
      const data = await response.json();
      if (data.cod === '404') {
        return AppService.message('Gif not found for this weather condition!');
      }
      this.weather.giphyUrl = data.data.images.original.url;
    } catch (error) {
      return AppService.message('Error fetching the Giphy API, try again later.');
    }
    return true;
  }

  render() {
    document.getElementsByTagName(this.tag)[0].innerHTML = WeatherView.html(this.weather);
    this.addEventListeners();
    this.applyDynamicClasses();
  }

  addEventListeners() {
    document.querySelector('#city > button').addEventListener('click', ev => {
      this.fetchWeather(document.querySelector('#city > input').value);
    });

    document.querySelectorAll('.unit-selector > span').forEach(el => {
      el.addEventListener('click', (ev) => {
        this.unit = ev.target.dataset.unit;
        if (this.weather) this.fetchWeather(this.weather.name);
        else this.render();
      });
    });
  }

  applyDynamicClasses() {
    const i = this.unit === 'imperial' ? 0 : 1;
    document.querySelectorAll('.unit-selector > span')[i].classList.add('active');
  }
}

export default WeatherController;
