import * as fs from 'fs'
import _, { random } from 'lodash'
import path from 'path';
import { fileURLToPath } from 'url';
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const wordPath = path.join(currentDirectory,'..', 'data', 'less-confusing-words.json')
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

export default () => {
    return randomFuturamaString(unconfusingJson)
}