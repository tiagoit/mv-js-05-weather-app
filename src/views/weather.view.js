class WeatherView {
  static html(weather) {
    let html = `
      <div>
        <div class="unit-selector">
          <span data-unit="imperial">°F</span>
          <span data-unit="metric">°C</span>
        </div>
        <div id="city">
          <input type="text" placeholder="City">
          <button>Buscar</button>
        </div>`;
    if (weather) {
      html += `
        <div class="city-weather">
          <h3>
            <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png">
            ${weather.name}
          </h3>

          <ul>
            <li>Temp: ${weather.temp}</li>
            <li>Max: ${weather.max}</li>
            <li>Min: ${weather.min}</li>
            <li>Humidity: ${weather.humidity}</li>
            <li>Pressure: ${weather.pressure}</li>
            <li>Description: ${weather.description}</li>
          </ul>
          
          <img src="${weather.giphyUrl}">

        </div>
      `;
    }

    html += '</div>';
    return html;
  }
}

export default WeatherView;
