import React, {memo} from 'react';

const Add = ({number}) => {
    console.log("render add component")


    
    return (
        <div className='text-center'>
            ADD {number}
        </div>
    );
};

export default memo(Add);