import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Error from '../pages/Error/Error'
const RouterLinks = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default RouterLinks
