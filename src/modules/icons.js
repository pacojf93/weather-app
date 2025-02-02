import snow from "../weather-icons/snow.svg"
import rain from "../weather-icons/rain.svg"
import wind from "../weather-icons/wind.svg"
import cloudy from "../weather-icons/cloudy.svg"
import partlyCloudyDay from "../weather-icons/partly-cloudy-day.svg"
import partlyCloudyNight from "../weather-icons/partly-cloudy-day.svg"
import clearDay from "../weather-icons/clear-day.svg"
import clearNight from "../weather-icons/clear-night.svg"
import fog from "../weather-icons/fog.svg"

const icons = (() => ({
  snow,
  rain,
  wind,
  cloudy,
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night': partlyCloudyNight,
  'clear-day': clearDay,
  'clear-night': clearNight,
  fog
}))()

export default icons
