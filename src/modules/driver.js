const driver = (() => {
    const VISUAL_CROSSING_URL = process.env.VISUAL_CROSSING_URL
    const KEY = process.env.KEY
    return (location) =>  fetch(`${VISUAL_CROSSING_URL}/${location}?key=${KEY}&unitGroup=metric`)
})()

export default driver