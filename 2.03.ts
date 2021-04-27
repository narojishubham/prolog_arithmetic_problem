// 2.04 (*) A list of prime numbers.
// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range


import {primeFactors} from './2.02'


function encode(arr: number) {
    let encoding = [];
    let previous: Array <number> = [0];
    let count: number = 1;
  let size:number = arr.length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== previous) {
        encoding.push([count, previous]);
        count = 1;
        previous = arr[i];
      } else {
        count++;
      }
    }
    encoding.push(count, previous);
  
    return encoding;
  }

function expression(number1:number) {
    // return encode(primeFactors(number1));

    return encode(factors: number]);
    let factors =primeFactors(number1)
  }
  console.log(expression(315));
  console.log(primeFactors(315));