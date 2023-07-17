function fizzbuzz(n){
    if(!Number.isInteger(n) || n <= 0) return [];
    const results = Array.from({length: n}, (_, i) => {
        let output = "";
        if(isFizz(i + 1)) output = `${output}Fizz`;
        if(isBuzz(i + 1)) output = `${output}Buzz`;
        return output || i + 1;
    });
    return results;
}

function isFizz(n) {
    return n % 3 === 0;
}

function isBuzz(n) {
    return n % 5 === 0;
}
    console.log(fizzbuzz(100));