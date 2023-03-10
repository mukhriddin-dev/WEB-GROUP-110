"use strict";

// $("#them").addEventListener("change", (e) => {
//     console.log(e.target.value);
//     localStorage.setItem('them', e.target.value);
//     changeThem();
// });

// function changeThem() {
//     let them = localStorage.getItem('them')
//     document.body.style.background = them
// }

// changeThem()

// $('.add').addEventListener("click", (e) => {
//     localStorage.setItem('status', true)
// })

// $('.rm').addEventListener("click", (e) => {
//     localStorage.removeItem('status')
// })

// $('.rv').addEventListener("click", (e) => {
//     localStorage.clear()
// })

// shalow clone

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let letters = numbers;

// letters.push(11)

// console.log(numbers)
// console.log(letters)

// deep clone

// SPREAD

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let letters = numbers.map((e) => e)
// let letters=[...numbers, ...numbers , ...numbers, ...numbers];
// letters.push(11)

// console.log(numbers)
// console.log(letters)

// ----- REST AND SPREAD OPERATORS ----

// let data = ['hello', 'javaScript', false, 7];

// let [str, language, check, ...num] = ['hello', 'javaScript', false, 7 , 11, 8, 110 , 112, "boolean"];

// console.log(num)

// let data=['a', 'b', 'c', 'd', 'e', 'f']
// let db = [...data]

// let [a, ...letter] = db;

// console.log(db)
// console.log(a)
// console.log(letter)

// console.log(this)

// function decloartion() {

//     // console.log(this)

// }

// decloartion()

// const app = () => {

//     console.log(this)
// }
// app()

// let obj = {
// age: 33,
// info: function () {
//     console.log(this);
// },
// };

// obj.info();


// let calc = {
//     a: 30,
//     b: 21,

//     addaefgsvdeae: function () {
//         return this.a - this.b
//     }
// }


// console.log(calc.addaefgsvdeae())

// function ok1() {
//     console.log("Calling 2")
// }

// function ok() {
//     console.log("Calling")
//     for (let i = 0; i < 100; i++) {
//         console.log(i)
//     }
//     ok1();
// }

// $('.add').addEventListener('click', () => {
//     setTimeout(() => {
//         console.log("Loading...")
//         setTimeout(() => {
//             console.log("Loading...")
//             setTimeout(() => {
//                 console.log("Loading...")
//                 setTimeout(() => {
//                     console.log("Loading...")
//                 }, 10)
//             }, 10)

//         }, 100)

//     }, 100)

// })


// setTimeout(() => {
//     console.log("Loading...")
// }, 1000)


// function loadData() {
//     let vada = "rwbeghmjkl;n";
//     console.log("loading . .. ")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (vada) {
//                 resolve(vada)
//             } else {
//                 reject('Failed to load data')
//             }
//         }, 2000)

//     })
// }

// loadData().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })


// const load = setTimeout(() => {
//     console.log("LOADING . . . DATA")
// }, 4000)

// console.log(load)
