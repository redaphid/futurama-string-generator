const fs = require('fs')
const _ = require('lodash')
const unconfusingJson = JSON.parse(fs.readFileSync('data/less-confusing-words.json', 'utf8'))
const randomName = ({ Adjectives, Nouns, Verbs, Adverbs }) => {    
    const name = [
            _.sample(Adjectives),
            _.sample(Nouns),
            _.sample(Verbs),
            _.sample(Nouns),
            _.sample(Adverbs),
        ]
        console.log(_.join(name, '-'))
    }
    
    randomName(unconfusingJson)