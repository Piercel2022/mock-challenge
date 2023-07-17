function fizzbuzz(n){
    if(!Number.isInteger(n) || n <= 0) return [];
    const results = Array.from({length: n}, (_, i) => {
        let output = i + 1;
        if((i + 1) % 15 === 0) output = 'FizzBuzz';
        else if((i + 1) % 3 === 0) output = 'Fizz';
        else if((i + 1) % 5 === 0) output = 'Buzz';
        return output;
    });
    return results;
}
console.log(fizzbuzz(100));