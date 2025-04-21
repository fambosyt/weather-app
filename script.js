const apiKey = 'DEIN_API_KEY_HIER'; // 🔑 HIER MUSST DU DEINEN API KEY EINFÜGEN

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return alert('Bitte eine Stadt eingeben.');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=de`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Stadt nicht gefunden');
    const data = await res.json();

    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `🌡️ Temperatur: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `☁️ Wetter: ${data.weather[0].description}`;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('weatherResult').classList.remove('hidden');
  } catch (err) {
    alert(err.message);
  }
}
