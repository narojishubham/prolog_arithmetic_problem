// 2.04 (*) A list of prime numbers.
// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.



function integerFunction(int1: number, int2: number) {
    let intList: Array<number> = [];
    for (let i = int1; i <= int2; i++) {
      intList.push(i);
    }
    return intList;
  }
  function isPrime(num: number) {
    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  function primeNumRangeList(int1: number, int2: number) {
    return integerFunction(int1, int2).filter((e) => {
      if (isPrime(e)) {
        return e;
      }
    });
  }
  console.log(primeNumRangeList(10, 40));