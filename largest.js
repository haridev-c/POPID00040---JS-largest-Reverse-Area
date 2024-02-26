const input = [1, 23, 56, -101, 98, 58, 5];

function largest(array){
    let big = array[0];
    const len = array.length;
    for(let i = 0; i< len; i++)
    {
        if(array[i] > big){
            big = array[i];
        }
    }
    return big;
}

console.log(largest(input));