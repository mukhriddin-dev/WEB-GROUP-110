import React from 'react';

const Input = ({id, type, placeholder , setVal , Val}) => {
    return (
         <label htmlFor={id}>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className="w-[655px] border pl-8 ml-4 rounded h-[52px] mt-[56px]"
                value={Val}
                onChange={(e)=>setVal(e.target.value)}
            />
          </label>
    );
};

export default Input;