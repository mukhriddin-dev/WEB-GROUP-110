import React from 'react'

import navlinks from '../../constants/navlink'
import { NavLink } from 'react-router-dom'
console.log(navlinks)
const index = () => {
  return (
    <>
      <aside className='w-[338px] bg-white shadow h-screen '>
        <h1 className='text text-2xl p-3'>LOGO</h1>
        <ul className='nav__ul bg-indigo-200 pl-2 p-2'>
          {navlinks?.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-indigo-400 block p-5 hover:bg-indigo-300 rounded m-1'
                      : 'p-5 block bg-indigo-100 hover:bg-indigo-300 rounded m-1'
                  }
                >
                  <i className={item.icon}></i> <span> {item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default index
