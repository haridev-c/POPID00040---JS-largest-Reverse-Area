const input = [1 , 2, 3, 4 ,5, 6, 7, 8, 9];
 function reverse(array){
    const output = [];
    const len = array.length;
    let j = 0;
    for(let i = (len - 1); i>= 0; i--){
        output[j] = array[i];
        j++;
    } 
    return output;
 }

 console.log(reverse(input));