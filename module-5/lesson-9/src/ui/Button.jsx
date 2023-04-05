import React from 'react';

const Button = ({type, bg , text , fun }) => {
    return (
        <button onClick={()=>fun()} type={type} className={`${bg ? bg : "bg-cyan-500"} mx-3 my-3 px-3 py-2 rounded focus:ring-4`}>
            {text ? text : "button"}
        </button>
    );  
};

export default Button;