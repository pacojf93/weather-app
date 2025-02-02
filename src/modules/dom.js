const dom = (() => ({
  input: document.getElementById("city-input"),
  location: document.getElementById("location"),
  temp: document.getElementById("temp"),
  conditions: document.getElementById("conditions"),
  description: document.getElementById("description"),
  humidity: document.getElementById("humidity"),
  windspeed: document.getElementById("windspeed"),
}))()

export default dom
