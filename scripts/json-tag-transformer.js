const fs = require('fs')
const _ = require('lodash')
const confusingJson = JSON.parse(fs.readFileSync('data/tagged-words.json', 'utf8'))

const unconfuse = (confusing) => {
    console.log(Object.keys(confusing))
    const lessConfusing = {
        Nouns: getNouns(confusing),
        Adjectives: getAdjectives(confusing),
        Verbs: getVerbs(confusing),
        Adverbs: getAdverbs(confusing),                
    }

    return lessConfusing

}

const getNouns = (confusing) => {
    let nouns = []
    nouns = nouns.concat(confusing.NN, confusing.NNP, confusing.NNPS)
    console.log(nouns.length)
    return nouns
}

const getAdjectives = (confusing) => {
    let adjectives = []
    adjectives = adjectives.concat(confusing.JJ)
    console.log(adjectives.length)
    return adjectives
}

const getVerbs = (confusing) => {
    let verbs = []
    verbs = verbs.concat(confusing.VBZ)
    return verbs
}

const getAdverbs = (confusing) => {
    let verbs = []
    verbs = verbs.concat(confusing.RB)
    return verbs
}

const unconfusingJson = unconfuse(confusingJson)

const randomName = (unconfusingJson) => {    
    const name = [
        _.sample(unconfusingJson.Adjectives),
        _.sample(unconfusingJson.Nouns),
        _.sample(unconfusingJson.Verbs),
        _.sample(unconfusingJson.Nouns),
        _.sample(unconfusingJson.Adverbs),
    ]
    console.log(_.join(name, '-'))
}

randomName(unconfusingJson)


