import React, { useState, memo, useMemo } from 'react'
import Add from './Add'

const index = () => {
  const [number, setNumber] = useState(0)

  function loops () {
    let arr = []
    for (let i = 0; i < 10000; i++) {
      arr.push(i)
    }
    
    return arr
  }

  const numbers = useMemo(() => {
    return loops()
  }, [number])

  console.log(numbers)

  console.log('Render extra page')
  return (
    <div className='ml-[330px] bg-green-500'>
      <div className='p-5 shadow'>
        <h1 className='text-2xl'>Extra Component {number}</h1>
        <button
          className='bg-red-400 m-3 text-white px-3 py-2 focus:ring-4'
          onClick={() => setNumber(number - 1)}
        >
          DECREMENT
        </button>

        <button
          className='bg-cyan-400 m-3 text-white px-3 py-2 focus:ring-4'
          onClick={() => setNumber(number + 1)}
        >
          INCREMENT
        </button>

        <ul>
          {numbers.map(i => {
            return <li key={i}>{i}</li>
          })}
        </ul>
      </div>

      <Add number={number} />
    </div>
  )
}

export default memo(index)
