const fs = require('fs')
const _ = require('lodash')
const confusingJson = JSON.parse(fs.readFileSync('data/tagged-words.json', 'utf8'))

const unconfuse = (confusing) => {
    const lessConfusing = {
        Nouns: getNouns(confusing),
        Adjectives: getAdjectives(confusing),
        Verbs: getVerbs(confusing),
        Adverbs: getAdverbs(confusing),
    }

    return lessConfusing

}

const getNouns = ({NN, NNP, NNS, NNPS}) => {    
    return [].concat(NN, NNP, NNS, NNPS)
}

const getAdjectives = ({JJ, JJS, JJR}) => {    
    return [].concat(JJ, JJS, JJR)
}

const getVerbs = ({VBZ, VBD}) => {        
    return [].concat(VBZ, VBD)
}

const getAdverbs = ({RB}) => {    
    return [].concat(RB)
}

const unconfusingJson = unconfuse(confusingJson)

const terriblePowerOf2Finder = (n) =>{
    let power = 1
    while(Math.pow(2, power) < n) power++
    return power - 1

}


fs.writeFileSync('data/less-confusing-words.json', JSON.stringify(unconfuse(confusingJson), null, 2))
