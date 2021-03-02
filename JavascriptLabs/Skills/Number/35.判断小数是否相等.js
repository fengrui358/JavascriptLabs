console.log('0.1+0.2===0.3', 0.1 + 0.2 === 0.3)
console.log(Number.EPSILON)

function numbersequal(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

const a=0.1+0.2, b=0.3;
console.log(numbersequal(a,b)); //这里就为true了