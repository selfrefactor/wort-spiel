import { flip,  includes, switcher, toLower } from 'rambdax'
const includesx = flip(includes)

import { wordsX } from 'string-fn'

const dem = [
  'das',
  'dem',
  'den',
  'der',
  'des',
  'die',
]
const als = [
  'als',
  'ob',
  'obwohl',
  'trotzdem',
  'weil',
  'wenn',
]
const einem = [
  'ein',
  'eine',
  'einem',
  'einen',
  'einer',
  'eines',
]
const meinem = [
  'mein',
  'meine',
  'meinem',
  'meinen',
  'meiner',
  'meines',
]
const deinem = [
  'dein',
  'deine',
  'deinem',
  'deinen',
  'deiner',
  'deines',
]
const diesem = [
  'dies',
  'diese',
  'diesem',
  'diesen',
  'dieser',
  'dieses',
]
const seinem = [
  'sein',
  'seine',
  'seinem',
  'seinen',
  'seiner',
  'seines',
]
const ihrem = [
  'ihr',
  'ihre',
  'ihrem',
  'ihren',
  'ihrer',
  'ihres',
]
const unserem = [
  'unser',
  'unsere',
  'unserem',
  'unseren',
  'unserer',
  'unseres',
]
const eurem = [
  'euer',
  'eurem',
  'euren',
  'eurer',
  'eurere',
  'eures',
]

export function whichArticleSet(word: string): string[]{

  return switcher<string[]>(word)
    .is(includesx(deinem), deinem)
    .is(includesx(dem), dem)
    .is(includesx(diesem), diesem)
    .is(includesx(einem), einem)
    .is(includesx(eurem), eurem)
    .is(includesx(ihrem), ihrem)
    .is(includesx(meinem), meinem)
    .is(includesx(seinem), seinem)
    .is(includesx(unserem), unserem)
    .default(als)
}

export const allArticles: string[] = [
  ...als,
  ...deinem,
  ...dem,
  ...diesem,
  ...einem,
  ...eurem,
  ...ihrem,
  ...meinem,
  ...seinem,
  ...unserem,
]

export function count(sentence: string): number{
  const words = wordsX(sentence).map(toLower)
  const counted = words.reduce((prev, current) => {
    return allArticles.includes(current) ?
    prev + 1 :
    prev
  }, 0)

  return counted
}

export function filter(sentences: string[]) {

  const result= sentences.filter(
    sentence => count(sentence) >= 1 && sentence.match(/sein.{1}$/) === null,
  )
  return result
}
