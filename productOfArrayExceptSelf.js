function product(arr){
    if(!Array.isArray(arr)){
        throw new Error('Input must be an array');
    }
    const temp = [];
    const product = 1;
    for(let i=0; i<arr.length; i++){
        if (isNaN(arr[i])) {
            throw new Error('Input array contains non-numeric values');
        }
        temp[i] = product;
        product *= arr[i];
    }
    product = 1;
    for(let i=arr.length-1; i>=0; i--){
        if (isNaN(arr[i])) {
            throw new Error('Input array contains non-numeric values');
        }
        temp[i] *= product;
        product *= arr[i];
    }
    return temp;
}


let arr = [2,3,4,5]
let arr1 = [1,2,3,4]
console.log(product(arr));
console.log(product(arr1));