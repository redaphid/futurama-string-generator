const fs = require('fs')
const _ = require('lodash')
const confusingJson = JSON.parse(fs.readFileSync('data/tagged-words.json', 'utf8'))

const unconfuse = (confusing) => {
    console.log(Object.keys(confusing))
    const lessConfusing = {
        Nouns: getNouns(confusing),
        Adjectives: getAdjectives(confusing),
        Verbs: [],
        Adverbs: [],                
    }

    return lessConfusing

}

const getNouns = (confusing) => {
    let nouns = []
    nouns = nouns.concat(confusing.NNP)
    return nouns
}

const getAdjectives = (confusing) => {
    let adjectives = []
    adjectives = adjectives.concat(confusing.JJ)
    return adjectives
}

const unconfusingJson = unconfuse(confusingJson)

console.log(unconfusingJson.Adjectives[0] + ' ' + unconfusingJson.Nouns[1])


