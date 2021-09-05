import { Lexicon, RuleSet, BrillPOSTagger, WordTokenizer } from "natural"
import { join, dirname } from 'path'
import { readFileSync } from 'fs'
import { chain, map, toLower, uniq } from 'lodash'
const corpus = readFileSync('./data/corpus.txt', 'utf8')

const base_folder = join(dirname(require.resolve("natural")), "brill_pos_tagger");
const rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
const lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
const defaultCategory = 'N';
const lexicon = new Lexicon(lexiconFilename, defaultCategory);
const rules = new RuleSet(rulesFilename);
const tagger = new BrillPOSTagger(lexicon, rules);

const tokenizer = new WordTokenizer();
const tokens = tokenizer.tokenize(corpus)
const tagged = tagger.tag(tokens).taggedWords
const groupedWords = chain(tagged)
    .groupBy('tag')
    .mapValues(e => map(e, 'token'))
    .mapValues(e => map(e, toLower))
    .mapValues(uniq)
    .value()

console.log(JSON.stringify(groupedWords, null, 2))


