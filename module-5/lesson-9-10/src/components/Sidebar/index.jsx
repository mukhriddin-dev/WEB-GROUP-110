import React, { memo } from 'react'
import navlinks from '../../constans/navlink'
import { NavLink } from 'react-router-dom'

const index = () => {
  let role = localStorage.getItem('role')
  console.log(role)
  console.log('Render Sidebar')
  return (
    <>
      <aside className='w-[338px] fixed bg-white shadow h-screen '>
        <h1 className='text text-3xl p-3'>LOGO</h1>
        <ul className='nav__ul bg-indigo-200 pl-2 p-2'>


          { role !== "1" ? (
            <li key={index}>
              <NavLink
                to={'/dashboard/posts'}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-indigo-400 block p-5 hover:bg-indigo-300 rounded m-1'
                    : 'p-5 block bg-indigo-100 hover:bg-indigo-300 rounded m-1'
                }
              >
                <i className={'bx bxs-folder-plus'}></i> <span> Posts</span>
              </NavLink>
            </li>
          ) : (
            navlinks?.map((item, index) => {
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
            })
          )}
        </ul>
      </aside>
    </>
  )
}

export default memo(index)
