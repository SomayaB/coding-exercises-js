export default function disemvoweling(string) {
  
  var strToLowerCase = string.toLowerCase()
  var stringWithoutSpecialChar = strToLowerCase.replace(/\W+/g, '')
  var stringWithoutVowels = stringWithoutSpecialChar.replace(/[aeiou]/ig,'')

  return stringWithoutVowels
}
