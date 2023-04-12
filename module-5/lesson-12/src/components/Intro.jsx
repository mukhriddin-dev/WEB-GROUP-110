import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Intro = () => {
  const introStyle = {
    border: '2px solid blue',
    padding: '60px'
  }

  const { data } = useSelector(state => state)

  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const add = () => {
    localStorage.setItem('data', JSON.stringify(data))

    const newData = {
      id: Date.now(),
      title: title
    }

    setTitle('')
    console.log(newData)
    if (newData.title.length === 0) {
      alert('Please fill in the title')
    } else {
      dispatch({ type: 'ADD', payload: newData })
    }
  }

  return (
    <div style={introStyle}>
      <h1>Intro component</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type='text'
        placeholder='enter title'
      />
      <button onClick={() => add()}>ADD Task</button>
    </div>
  )
}

export default Intro
