
const fetch = require('node-fetch')

const { JSDOM } = require('jsdom');
const baseUrl = "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=futurama"

async function getEpisodeNames() {
    const res = await fetch(baseUrl)
    const text = await res.text()
    const dom = new JSDOM(text)
    const lElems = dom.window.document.querySelectorAll('.season-episode-title')
    const links = []
    lElems.forEach(e => links.push(e.getAttribute('href')))
    console.log(links)
}

async function getScript(url) {
    const res = await fetch(url)
    const text = await res.text()      
    const dom = new JSDOM(text)
    const script = dom.window.document.querySelector('.scrolling-script-container').textContent
    return script
}
// async function getScripts() {
//     const script = await getScript(url)
//     console.log("gs",script)
//     return script
// }

console.log(getEpisodeNames())
// console.log(getScripts())