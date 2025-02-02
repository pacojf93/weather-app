const driver = (() => {
    const KEY = "FXSRC56ZYMBXRYPEZYWZHND42"
    const VISUAL_CROSSING_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
    return (location) =>  fetch(`${VISUAL_CROSSING_URL}/${location}?key=${KEY}&unitGroup=metric`)
})()

export default driver