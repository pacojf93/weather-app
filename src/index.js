import './index.css'
import dom from './modules/dom'

const VISUAL_CROSSING_URL = process.env.VISUAL_CROSSING_URL
const KEY = process.env.KEY

dom.input
    .addEventListener('input',(e) => {
        fetch(`${VISUAL_CROSSING_URL}/${e.currentTarget.value}?key=${KEY}&unitGroup=metric`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                dom.location.textContent = response.resolvedAddress
                dom.temp.textContent = `${response.currentConditions.temp} °C`
                dom.conditions.textContent = `${response.currentConditions.conditions}`
                dom.description.textContent = `${response.description}`
                dom.humidity.textContent = `${response.currentConditions.humidity} %`
                dom.windspeed.textContent = `${response.currentConditions.windspeed} km/h`
            })
            .catch(error => console.log(error))
    })