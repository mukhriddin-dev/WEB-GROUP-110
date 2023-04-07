import React, { useState , memo} from 'react'
import Dashboard from './pages/Dashboard'

const App = () => {
  console.log('Render App.js')
  const [number, setNumber] = useState(0)

  return (
    <>
      <div className='ml-[330px] bg-green-500'>
        <div className='p-5 shadow'>
          <h1 className='text-2xl'>App Component {number}</h1>
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
        </div>
      </div>

      <Dashboard />
    </>
  )
}

export default memo(App)
