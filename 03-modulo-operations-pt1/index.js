'use strict'

//Return the ones column of any number

function returnOnesSplit(n){
  if(n.toString().split('').length === 1) return n //if there's only 1 digit return n.
  let numArray = n.toString().split('') //turn n into an array.
  return parseInt(numArray[numArray.length - 1]) //return parsed ones column string.
}

function returnOnesMod(n) {
  return n % 10 //return the remainder of a number divided by 10. This will always return the ones column.
}

returnOnesSplit(10492)
returnOnesMod(10492)