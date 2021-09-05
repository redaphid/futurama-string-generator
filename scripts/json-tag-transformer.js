import { readFileSync, writeFileSync } from 'fs'
import _ from 'lodash'
const confusingJson = JSON.parse(readFileSync('data/tagged-words.json', 'utf8'))

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

writeFileSync('data/less-confusing-words.json', JSON.stringify(unconfuse(confusingJson)))
