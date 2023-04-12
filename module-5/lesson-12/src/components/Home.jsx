import React, { useEffect } from 'react'
import Intro from './Intro'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const homeStyle = {
    border: '2px solid red',
    padding: '60px'
  }

  const { data ,load } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const getpost = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        const posts = await response.json()

        if (response.status === 200) {
            dispatch({ type: 'POST', payload: posts })
            dispatch({type:'LOAD'})
        }
      } catch (err) {
        console.log(err)
      }
    }
      
      getpost();
  }, [])

  return (
    <div style={homeStyle}>
      <h1>Home page</h1>
      <ul>
        {load ? 
          data.map(item => {
            return <li key={item.id}>{item.title}</li>
          }): <h1>LOADING . . .</h1>}
      </ul>
      <Intro />
    </div>
  )
}

export default Home
