import React from 'react';

const index = (props) => {
    
    // let arr = [1, 2, 3, 4, 5];

    // let [one, two, ...three] = arr; // rest

    // let newArr=[...arr] // spread

    // console.log(newArr)
    // console.log(one, two, three)


    const app = {
        one: 1,
        two: 2,
        sum: 3
    }



    const { sum } = app;

console.log(sum)

    console.log(app.sum)




    const newObj = { ...app }
    
    console.log(newObj)




    return (
        <div>
            <h1>Todos</h1>
        </div>
    );
};

export default index;