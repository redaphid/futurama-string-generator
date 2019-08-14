
const fetch = require('node-fetch')
const _ = require('lodash')
const { JSDOM } = require('jsdom');
const baseUrl = "https://www.springfieldspringfield.co.uk/"

async function getEpisodeList() {
    const res = await fetch(baseUrl + "view_episode_scripts.php?tv-show=futurama")
    const text = await res.text()
    const dom = new JSDOM(text)
    const lElems = dom.window.document.querySelectorAll('.season-episode-title')
    const links = []
    lElems.forEach(e => links.push(e.getAttribute('href')))
    return links
}

async function getScript(url) {
    url = baseUrl + url
    const res = await fetch(url)
    const text = await res.text()      
    const dom = new JSDOM(text)
    const script = dom.window.document.querySelector('.scrolling-script-container').textContent
    console.log(script.replace(/\|/gi, '\n'))
    return script
}
// async function getScripts() {
//     const script = await getScript(url)
//     console.log("gs",script)
//     return script
// }
async function getScripts() {
    const episodeList = await getEpisodeList()
    const promises = _.map(episodeList, getScript)
    return await Promise.all(promises)
}

getScripts()