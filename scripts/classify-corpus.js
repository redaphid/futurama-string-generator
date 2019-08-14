const natural = require("natural")
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const corpus = fs.readFileSync('./data/corpus.txt', 'utf8')

const base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
const rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
const lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
const defaultCategory = 'N';
const lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
const rules = new natural.RuleSet(rulesFilename);
const tagger = new natural.BrillPOSTagger(lexicon, rules);

const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(corpus)
const tagged = tagger.tag(tokens).taggedWords
const groupedWords = _.chain(tagged)
    .groupBy('tag')
    .mapValues(e => _.map(e, 'token'))
    .mapValues(e => _.map(e, _.toLower))
    .mapValues(_.uniq)
    .value()

console.log(JSON.stringify(groupedWords, null, 2))


