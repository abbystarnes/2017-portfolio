
/*

array of n integers
degree = max frequency of any element in the array

output:
smalles subarray size such that subarray's degree is equal to the array's degree (isn't this just the sum of the most occurances?)

// count number of each elements
// take largest value = length of array
[5,1,2,2,3,1]
*/




function degreeOfArray(arr) {
  let occurances = {};
  let largest = 0;
  for (let x = 0; x < arr.length; x ++){
    if (!occurances[arr[x]]){
      occurances[arr[x]] = 1;
    } else {
      occurances[arr[x]] = occurances[arr[x]] + 1;
    }
    // console.log(occurances[arr[x]]);
  }
  // console.log(occurances);


  for (item in occurances) {
    console.log(occurances[item], 'item');
    if (occurances[item] > largest){
      largest = occurances[item];
    }
  }

  return largest;
}

console.log(degreeOfArray([5,1,2,2,3,1]));










// inputs : n animal species
// each i has a distince ID from 0 to n-1
// every species may or may not have 1 + predators
// x is predator of y if one of the following:
  // x is d pred species Y
  // z is d pred spec y and spex x is d pred spec z

// each max 1 dir pred
// no two mutual pred of each other
// no pred of self

// output: minimum number of species groups the animals must form such that each species belongs to one group and no species is the same group as one of its direct or indirect predators

// no species belongs to group w/direct or indirect predator






// sum of lengths of any two sides is greater than length of third sides
// a + b > c
// a + c > b
// b + c > a

// a 7, 10, 7
// n integers where each index i describes the elngth of side a for triangle i
// b 2, 3, 4

// function triangleOrNot(a, b, c) {
//   let sideA;
//   let sideB;
//   let sideC;
//   let solution = [];
//   for (let x = 0; x < a.length; x++){
//     let isTriangle = 'Yes';
//     sideA = a[x];
//     sideB = b[x];
//     sideC = c[x];
//     if ((a + b) < c){
//       isTriangle = 'No';
//     }
//     if ((a + c) < b){
//       isTriangle = 'No';
//     }
//     if ((b + c) < a){
//       isTriangle = 'No';
//     }
//     console.log(isTriangle);
//     solution.push(isTriangle);
//   }
//   return solution;
// }
//
//
// console.log(triangleOrNot(3, 6, 9));
//
//
// if ((a + c) < b){
//   isTriangle = !isTriangle;
// }
// if ((b + c) < a){
//   isTriangle = !isTriangle;
// }


// let isTriangle = true;
//
// if ((a + b) < c){
//   isTriangle = false;
// }
// if ((a + c) < b){
//   isTriangle = false;
// }
// if ((b + c) < a){
//   isTriangle = false;
// }


//
// // left rotation shifts elements 1 unit to left
// // 1,2,3,4,5 2
// // 3,4,5,1,2
//
// // inputs
// // array of n integers
// // d, numbers
//
// // output
// // updated array as a single line of space-seperated integers
//
// // input : an integer
// // output : num holes
// // 0 1 2 3 4 5 6 7 8 9
//
// // split number into an array
// // check num holes against an object
//
// let holes = {
//   0 : 1,
//   1 : 0,
//   2 : 0,
//   3 : 0,
//   4 : 1,
//   5 : 0,
//   6 : 1,
//   7 : 0,
//   8 : 2,
//   9 : 1
// }
//
// //
//
// function countHoles(num) {
//   // console.log(num);
//   let count = 0;
//   let digits = (""+num).split("");
//   // console.log(digits);
//   for (let x = 0; x < digits.length; x++){
//     console.log(holes[digits[x]]);
//     count = count + holes[digits[x]];
//   }
//   console.log(count);
//   return count;
// }
//
// console.log(countHoles(88));











// input int l, int r
// print odd numbers between l and r (l and r inclusive)
// output inclusive array of integers


// function oddNumbers(l, r) {
//   let answer = [];
//   for (let x = l; x <= r; x++){
//     if (x %2) {
//       answer.push(x);
//     }
//   }
//   return answer;
// }
//
// console.log(oddNumbers(1, 4));




// console.log('hi');
//
// // unsorted array, n length, return bool k present or not
// // findNumber function
// // params: array arr, integer k
// // return string YES or NO deonting presence of item in array
//
// function findNumber(arr, k) {
//   console.log('running');
//     let answer = 'NO';
//     for (let x = 0; x < arr.length; x++) {
//       if (arr[x] === k) {
//         console.log('it is');
//         answer = 'YES';
//       }
//     }
//
//     return answer;
// }
//
// console.log(findNumber([3,2,3,1,5], 5));
