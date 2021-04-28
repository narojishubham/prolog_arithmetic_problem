


import { greatestCommonDivisor } from "./2.07"

function Phi(n):number {
    let result = 1;
    for (let i:number = 2; i < n; i++)
        if (greatestCommonDivisor(i, n) == 1)
            result+=1;
    return result;
    
      
}
for (let n:number = 1; n <= 10; n++)
{
console.log("phi(" + n + ") = " + Phi(n));
}

