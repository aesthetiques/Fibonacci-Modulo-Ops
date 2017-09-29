'use strict'

//We're going to generate a fibonacci sequence that's as long as the number that we input.

exports.fibGen = (n) => {
  //fibonacci sequences start with 1 and increase. because JavaScript we'll cheat a little bit
  let fibArray = [0, 1]
  //[we can't add a number that doesn't exist, so in the first iterative process through, the
  //fibonacci array we'll make wouldn't have a previous number to add. An interger + undefined will
  //resolve to NaN. Thus we start with an array of 0, 1]
  for(let i = 1; i < n; i++){
    fibArray.push(fibArray[i] + fibArray[i - 1])
  }
  console.log(fibArray)
  return fibArray
}

exports.fibGen(10)

//Note that because of the way that indices work, this will return an array with a length of n + 1.
//My stop case for the generation loop is stop at n. 0 is only there for computational reasons, which
//is why I leave it this way.