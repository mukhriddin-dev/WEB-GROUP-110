import React, { useReducer, useContext } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Home from './components/Home';

const App = () => {

  const { number, load, data } = useSelector((state) => state);
  const dispatch = useDispatch();



  console.log(load)
  console.log(data)
 

  return (
    <div>
      <h1>Redux {number}</h1>
      <button onClick={() => dispatch({ type: "INCR" })}>+</button>
      <Home/>
    </div>
  )
}
export default App
