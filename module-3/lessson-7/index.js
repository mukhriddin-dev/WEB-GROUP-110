"use strict";

// console.log(typeof [1,2,3,4]) // object
// let array = new Array(1, 2, 3, 4, 5, "salom", "php", "goodbye",false);   // 1-
// let array = [1, 2, 3, 4, 5, "salom", "php", "goodbye", false];
// console.log(array)


// let shop = [];

// shop[0] = 'apple macbook';
// shop[1] = "Dell 11";
// shop[4] = "Victus i12"

// delete shop[0];
// console.log(shop)

// let array = [];

// array[0] = 0;
// array[1] = 1;
// array[2] = 2;
// array[3] = 3;
// array[4] = 4;
// array[5] = 5;

// for (let i = 0; i < 100; i++) { 
//     // console.log(i)
//     array[i] = i;
// }

// console.log(array)

// [1,2,4,8,16,32]


// // 4 1 , 4 2 ,



// m2
// let n = +prompt('n=');
// let numbers = [];
// for (let i = 0; i <= n; i++) { 
//     // console.log(2 ** i)
//     numbers[i]=2**i;
// }
// console.log(numbers)






//array.push("node js"); // push -> array ohiridan element qo'shadi.
//array.push('Java')

//array.pop(); // pop -> array ohiridan element o'chiradi


//array.unshift('Spring boot'); // unshift -> array boshidan element qo'shadi.
//array.unshift('larvael'); // unshift -> array boshidan element qo'shadi.

//array.shift()   // shift -> array elementini boshidan o'chiradi
//c//onsole.log(array)


let array = ['java', 'javascript', 'php', 'golang', 'nodejs', "angular", "vue", "react"];

//let newArray = array.splice(2, 4);  /// array.splice( index , n)
// let newArray = array.slice(2,6)

let newArray = array.splice(3, 6);
newArray.push('Flutter')

// let newArray2 = array.concat(newArray).concat(['htm','css','scss']).concat(array)

console.log(newArray.indexOf('vue'))// 

console.log(newArray.includes("react")) //


console.log(newArray.join(''))





console.log(array);
console.log(newArray);
// console.log(newArray2)







