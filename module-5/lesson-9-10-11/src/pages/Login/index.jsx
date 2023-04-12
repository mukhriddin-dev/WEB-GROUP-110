import React, { useState } from 'react'
import { auth } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const index = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    const newUser = {
      username: username,
      password: password
    }

    auth.login(newUser).then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', response?.data?.token)
        localStorage.setItem('role', 0)
        navigate('/dashboard')
      }
    })
  }

  return (
    <div className='bg-cyan-100 p-5'>
      {/* <!-- component --> */}
      <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
        <div className='relative py-3 w-11/12 max-w-xl sm:mx-auto'>
          <div className='relative p-8 bg-white shadow-sm sm:rounded-xl'>
            <form className='w-full'>
              <div className='mb-5 relative'>
                <input
                  type='text'
                  id='email'
                  className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
                  placeholder='name@example.com'
                  autoComplete='off'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <label
                  htmlFor='email'
                  className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transhtmlForm origin-left transition-all duration-100 ease-in-out'
                >
                  Email address
                </label>
              </div>
              <div className='mb-5 relative'>
                <input
                  type='password'
                  id='password'
                  className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
                  placeholder='password'
                  autoComplete='off'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label
                  htmlFor='password'
                  className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transhtmlForm origin-left transition-all duration-100 ease-in-out'
                >
                  Password
                </label>
              </div>
              <button
                onClick={login}
                className='w-full bg-indigo-600 text-white p-3 rounded-md'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
