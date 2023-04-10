import React, { useState, memo, useEffect, useReducer } from 'react'
import Dashboard from './pages/Dashboard'
import RouterLinks from './router/RouterLinks'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const STATE = {
    post: [],
    user: 'Faxriddin',
    load: false,
    count: 0
  }

  const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case 'INCR':
        return { ...state, count: state.count + 1 }
      case 'DECR':
        return { ...state, count: state.count - 1 }
      case 'RESET':
        return { ...state, count: 0 }
      case 'UPDATEUSER':
        return { ...state, user: action.payload }
      case 'POST_LOADED':
        return { ...state, post: action.payload }
      case 'LOADED':
        return { ...state, load: true }
    }
  }

  const [data, dispatch] = useReducer(reducer, STATE)

  const getpsot = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      dispatch({ type: 'POST_LOADED', payload: posts })
      dispatch({ type: 'LOADED' })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getpsot()
  }, [])

  if (!data.load) {
    return <h1>LOADING . . . </h1>
  }

  return (
    <>
      <h1 className='text-center text-3xl'>{data.count}</h1>

      <button
        className='bg-orange-500 px-3 py-2 focus:ring-4 m-4'
        onClick={() => dispatch({ type: 'DECR' })}
      >
        DECREMENT
      </button>

      <button
        className='bg-green-500 px-3 py-2 focus:ring-4 m-4'
        onClick={() => dispatch({ type: 'INCR' })}
      >
        INCREMENT
      </button>

      <button
        className='bg-blue-500 px-3 py-2 focus:ring-4 m-4'
        onClick={() => dispatch({ type: 'RESET' })}
      >
        RESET
      </button>

      <button
        className='bg-cyan-500 px-3 py-2 focus:ring-4 m-4'
        onClick={() => getpsot()}
      >
        FETCH POST
      </button>

      <input
        type='text'
        value={data.user}
        onChange={e =>
          dispatch({ type: 'UPDATEUSER', payload: e.target.value })
        }
        className='p-4 w-[400px] border focus:ring-4 '
      />

      <div className='p-5 shadow mx-auto'>
        <ul>
          {data?.post.map(item => {
            return (
              <li key={item.id} className='shadow p-2 rounded bg-white m-3'>
                {item.title}
              </li>
            )
          })}
        </ul>
      </div>
      <RouterLinks /> 


    </>
  )
}

export default memo(App)

// const redirect = useNavigate()

// useEffect(() => {
//   let token = localStorage.getItem('token')

//   if (!token) {
//     localStorage.clear()
//     redirect('/')
//   }
// }, [])

