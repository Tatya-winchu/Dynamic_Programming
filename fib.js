//Write a function 'fib(n)' that takes in a number as an argument. 
//The function should return the n-th number of the fibonacci sequence 
//fib sequence n: 1,2,3,4,5,6,7,8,9,....
//         fib(n): 1,1,2,3,,5,8,13,21,34,....


const fib = (num)=>{
    if(num <= 2) return 1;
    return fib(num-1) + fib (num-2);    
}


console.log(fib(4));//shpuld return 3
console.log(fib(2));//shpuld return 1
console.log(fib(6));//shpuld return 6
console.log(fib(30));//shpuld return 832040
//console.log(fib(50));//this takes ages to return the value of n 


/*
    visualization of problem 
    e.g. fib(7)
                             7

              6                        5 


         5                 4                    4                  3

                 
  4          3         3         2         3          2       2         1  <=== this is base case it'll return 1 


3    2     2    1   2    1              2       1 <=== this is base case it'll return 1 


2  1 <== again base case will return 1 


this implementation has time complexity of O(2n) and space complexity of O(n) and needs to be faster 

*/
