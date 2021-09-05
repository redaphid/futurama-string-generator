const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const wordPath = path.join(__dirname, '..', 'data', 'less-confusing-words.json')
const unconfusingJson = JSON.parse(fs.readFileSync(wordPath, 'utf8'))
const randomFuturamaString = ({ Adjectives, Nouns, Verbs, Adverbs }) => {
    const name = [
        _.sample(Adjectives),
        _.sample(Nouns),
        _.sample(Verbs),
        _.sample(Nouns),
        _.sample(Adverbs),
    ]
    return name.join('-')
}

module.exports = () => {
    return randomFuturamaString(unconfusingJson)
}