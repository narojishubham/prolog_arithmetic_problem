
export function isPrime <T extends number> (startList:T,eandList:T) {

for (let i = startList; i <= eandList; i++) {
    let flag = 0;
    if (i === 1) {
        console.log(i," is neither prime nor composite number.");
    }
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i, ' is the prime number');
    }
}
}
isPrime(1,100)