export default class WeatherService {
  apiBase = {
    apiKey: '9bcf77a8143149da977212413221907',
    current: '/current.json',
    url: 'https://api.weatherapi.com/v1',
  };

  async check(city) {
    const { url, current, apiKey } = this.apiBase;
    const request = `${url + current}?key=${apiKey}&q=${city}&lang=ru`;
    // console.log(request);
    const result = await fetch(request);

    return result.json();
  }

  toMetersPerSecond(kph) {
    return (kph / 3.6).toFixed(1);
  }

  toMmHg(pressure_mb) {
    return Math.round(pressure_mb * 0.75006156);
  }
}
