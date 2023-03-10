"use strict";

// / PENDING ->
// REJECTED ->
// FULLFILED ->

// const app = () => {
//     let result = [1, 2, 3];
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (result.length) {
//                 resolve(result);
//             } else {
//                 reject('Not found 404');
//             }
//         }, 2000)
//     })
// }

// app().then((data) => {
//     console.log("data " + data)
// }).catch((err) => {
//     console.log("error " + err)
// }). finally(() => {
//     console.log("Promise finished")
// })

// setTimeout(() => {
//     console.log("1")
//     setTimeout(() => {
//         console.log("2")
//         setTimeout(() => {
//             console.log("3")
//             setTimeout(() => {
//                 console.log(qwrefr324)
//             },1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// async function generateNumber() {

//     let sum =await "lorem lorem lorem ipsum dolor sit amet, consectetur adip"
//     // for (let i = 0; i < 20; i++) {
//     //     sum +=await i;
//     // }

//     return sum
// }

// generateNumber().then((result) => {
//     console.log(result)
// })

// console.log(generateNumber())

// console.log("Hello world!")

// / JSON ---

// OBJECT TO JSON
// JSON TO OBJECT

// let person = {
//     age: 22,
//     name: "John",
//     color: "brown"
// }

// console.log(person)

// let jsonuse = JSON.stringify(person)

// let toObj = JSON.parse(jsonuse)

// console.log(jsonuse)
// console.log(toObj)

// console.log(fetch)

// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {

//     return response.json();

// }).then((result) => {

//     $('#ul').innerHTML = "<span class=' loader '></span>"

//     setTimeout(() => {
//         listrender(result)

//     }, 3000)
// }).catch((err) => {
//     console.log(err);
// });

// function listrender(data) {
//     $('#ul').innerHTML = ""

//     data.forEach((element) => {


//         let list = createElement("li", "list-item", element.title);

//         $('#ul').append(list);

//     });
// }


const albums = async () => {
    $('.wrapper').innerHTML = "<span class=' loader '></span>"

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const result = await response.json();


        // setTimeout(() => {
        //     albumRender(result);
        // }, 3000)

        albumRender(result);


    } catch (err) {
        console.log(err)
    }
};


albums();


function albumRender(data) {
    $('.wrapper').innerHTML = ""

    data.forEach(e => {
        let card = createElement('div', 'card', e.title);
        $('.wrapper').append(card)
    })
}
