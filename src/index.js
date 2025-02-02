import "./index.css"
import dom from "./modules/dom"
import icons from "./modules/icons"
import driver from "./modules/driver"

dom.input.addEventListener("input", (e) => {
  driver(e.currentTarget.value)
    .then((response) => {
      console.log(response.status)
      return response.json()
    })
    .then((response) => {
      console.log(response)
      dom.location.textContent = response.resolvedAddress
      dom.temp.textContent = `${response.currentConditions.temp} °C`
      dom.conditions.textContent = `${response.currentConditions.conditions}`
      dom.description.textContent = `${response.description}`
      dom.humidity.textContent = `${response.currentConditions.humidity} %`
      dom.windspeed.textContent = `${response.currentConditions.windspeed} km/h`
      dom.icon.src = icons[response.currentConditions.icon]
      dom.hidden.forEach((element) => element.classList.remove("hidden"))
    })
    .catch((error) => {
      console.log(error)
      dom.hidden.forEach((element) => element.classList.add("hidden"))
    })
})
