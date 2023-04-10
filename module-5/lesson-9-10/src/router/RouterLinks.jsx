import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from "../pages/Dashboard";
import Error from '../pages/Error/Error'
import Posts from '../pages/Order'
import PostItem from '../pages/Order/PostItem'
import Extra from '../pages/Extra'
import Login from '../pages/Login'

const RouterLinks = () => {
  console.log('render Routers')
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        
        <Route path='/dashboard' element={<Dashboard />}>

          <Route path='/dashboard/posts' element={<Posts />} />
          <Route path='/dashboard/posts/:id' element={<PostItem />} />
          <Route path='/dashboard/extra/' element={<Extra />} />
          

        </Route>
        <Route path='*' element={<Error />} />

      </Routes>
    </>
  )
}

export default memo(RouterLinks)
