export default function stringPermutations(string) {
  var splitArr = string.split('')

  var uniqueCharArr = splitArr.filter(function(char, index, self){
    return index == self.indexOf(char)
  })

  var len = uniqueCharArr.length
  var permutations = []
  var rest
  var picked
  var restPerms
  var next

  if (len == 0)
      return [string]

  for (var i=0; i<len; i++)
  {
      rest = Object.create(uniqueCharArr)
      picked = rest.splice(i, 1);

      restPerms = stringPermutations(rest.join(''))

     for (var j=0, jLen = restPerms.length; j< jLen; j++)
     {
         next = picked.concat(restPerms[j])
         permutations.push(next.join(''))
     }
  }
  return permutations
}
//working but need to return with break lines (\n)
