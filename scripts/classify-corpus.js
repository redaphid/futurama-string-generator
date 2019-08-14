const natural = require("natural")
const path = require('path')
const fs = require('fs')

const corpus = fs.readFileSync('./data/corpus.txt', 'utf8')

const base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
const rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
const lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
const defaultCategory = 'N';
const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(corpus)
console.log(tokens.length)

