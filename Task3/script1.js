function mul(num, arr) {
    let carry = 0;
    let new_arr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let val = num * arr[i] + carry; 
        let c = val % 100000;
        new_arr.unshift(c); 
        carry = Math.floor(val / 100000);  
    }

    while (carry != 0) {
        let c = carry % 100000;
        new_arr.unshift(c); 
        carry = Math.floor(carry / 100000);
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
    // console.log(myArray);
    return myArray;
}
let n=100;
let myArray=cal_fact(n);
// console.log(myArray[99]);
// console.log(myArray[myArray.length-1].join(''));


// array_new = array_new.map(element => element.toString().padStart(5, '0'));
// console.log(array_new.join(''));

let array_new=myArray[n-1];

for (let i = 1; i < array_new.length; i++) {
    let strNum = array_new[i].toString();
    while (strNum.length < 5) {
        strNum = '0' + strNum; 
    }
    array_new[i] = strNum;
}
console.log(array_new.join(''));
