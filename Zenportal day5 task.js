//using anonymous functions

//print odd numbers 
let odd = function () {
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let odds = arr.filter(n => n%2)
console.log("odd values is"+odds);
}
odd();

//sum of numbers
let sum = function () {
let arr1 = [1,2,3,4,5,6]
let addnums = (currvalue,sum) => sum + currvalue;
console.log("sum of numbers is "+arr1.reduce(addnums,0));
}
sum();

//prime numbers in an array
let prime = function() {
var arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2 = arr2.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(arr2);
}
prime();

//return palindromes in array
let palindrome = function() {
const arr3 = ['jose', 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr3.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr3));
}
palindrome();

//remove duplicates
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);