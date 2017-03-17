import { expect } from 'chai'
import whereInTheJson from '../src/whereInTheJson'

var weirdObject = `{
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}`
const newObject = JSON.parse(weirdObject)
describe.only('whereInTheJson', () => {
  expect(whereInTheJson).to.be.a.function
  expect(whereInTheJson(newObject, '4chan'))
})
