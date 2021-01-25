/*
* Writing a fibonacci function with "Memoization" to avoid repetation of going through tree +
* the defination of memoization is == a memo or a temporary storage 
* here we will use a javascript object where key will be argument to function, value will be return of the function 
*/

const fib = (n, tempMomo = {}) => {
    //the function will take n as a number and a tem object to store the state 
    if(n in tempMomo ) return tempMomo[n];//check if the key is part of object 
    if(n <= 2) return 1;
    tempMomo[n] = fib(n-1,tempMomo) + fib(n-2,tempMomo);//hence value not a part of tempMemo add teh value to object
    return tempMomo[n];
}


console.log(fib(4));//should return 3
console.log(fib(2));//should return 1
console.log(fib(6));//should return 6
console.log(fib(30));//should return 832040
console.log(fib(50));//should return 12586269025
console.log(fib(100));//should return 354224848179262000000