
    function fizzbuzz(n){
        let results = [];
        for(let i = 1; i <= n; i++){
            let output = "";
            if(i % 3 === 0) output = `${output}Fizz`;
            if(i % 5 === 0) output = `${output}Buzz`;
            results.push(output || i);
        }
        return results;
    }
    console.log(fizzbuzz(100));
