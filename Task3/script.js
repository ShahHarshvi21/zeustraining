function mul(num, arr) {
    let carry = 0;
    let new_arr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let val = num * arr[i] + carry; 
        let c = val % 10;
        new_arr.unshift(c); 
        carry = Math.floor(val / 10);  
    }

    while (carry != 0) {
        let c = carry % 10;
        new_arr.unshift(c); 
        carry = Math.floor(carry / 10);
    }

    return new_arr;
}



function cal_fact(n){
    let myArray=new Array(n);
    myArray[0]=[1];
    // console.log(myArray);
    for(let i=1;i<n;i++){
        let prev_arr=myArray[i-1];
        let new_arr=mul(i,prev_arr);
        myArray[i] = new_arr;
    }
    return myArray;
}

let myArray=cal_fact(100);
console.log(myArray[myArray.length-1].join(''));



