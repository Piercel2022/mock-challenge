function Product(arr){
        
    const temp = [];
    
    
    const product = 1;
    for(let i=0; i<arr.length; i++){
        temp[i] = product;
        product *= arr[i];
    }
    
    product = 1;
    for(let i=arr.length-1; i>=0; i--){
        temp[i] *= product;
        product *= arr[i];
    }
    
    return temp;
}


let arr = [2,3,4,5]
let arr1 = [1,2,3,4]
console.log(Product(arr));
console.log(Product(arr1));