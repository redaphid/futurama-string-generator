const fs = require('fs')
const confusingJson = JSON.parse(fs.readFileSync('../tagged-words.json', 'utf8'))
console.log(confusingJson)

const unconfuse = (confusing) => {
    console.log(Object.keys(confusing))
}

unconfuse(confusingJson)


