import React, { useReducer, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import RouterLinks from '../../router/RouterLinks'
import { Outlet } from 'react-router-dom'

const index = () => {
  const data = {
    variables: 'React Advanced'
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'VUE':
        return { ...state, variables: action.payload }
    }
  }

  const [state, dispatch] = useReducer(reducer, data)

  console.log(state.variables)

  useEffect(() => {
    dispatch({ type: 'VUE', payload: 'VUEJS' })
  }, [])

  return (
    <>
      {/*header  */}

      <main className='flex'>
        <Sidebar />
        <section className='main rounded-lg m-2 w-full p-5'>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default index
