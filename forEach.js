// const arr = [1, 2, 3, 45, 44, 23, 34];

// for (let item of arr) {
//   console.log(item);
// }

// function show(a) {
//   console.log(a);
// }

// const show = (a) => console.log(a);

// arr.forEach((a, index, wholeArray) => {
//   console.log(`item-${a}, Index No.-${index}, Whole Array-${wholeArray}`);
// });

// const result = arr.map((a) => a * 2);
// arr.map((item, index,aa) => {
//   console.log(item, index,aa);
// });

// console.log(result);

const arr = [1, 8, 22, 33, 45, 44, 23, 34];

const num = arr.find((item) => item > 10 && item % 2 === 0); //give 1st element when fullfil condition(s)

const num1 = arr.filter((a) => a > 10 && a % 2 === 0); //give array as output when fullfil condition(s) otherwise empty array[]

// arr.reduce((previousValue, currentValue) =>{operation}, initialValue )

const arr1 = [1, 2, 4, 5];

const sum = arr1.reduce((nums1, nums2) => nums1 * nums2, 1);
// console.log(sum);

const arrObj = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

const sum1 = arrObj.reduce((prev, curr) => prev + curr.a, 0);

console.log(sum1)