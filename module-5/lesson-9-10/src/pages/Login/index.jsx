import React from 'react'

const index = () => {
  return (
    <div classNameName='bg-cyan-100 p-5'>
      {/* <!-- component --> */}
      <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
        <div className='relative py-3 w-11/12 max-w-xl sm:mx-auto'>
          <div className='relative p-8 bg-white shadow-sm sm:rounded-xl'>
            <form className='w-full'>
              <div className='mb-5 relative'>
                <input
                  type='email'
                  id='email'
                  className='peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent'
                  placeholder='name@example.com'
                  autocomplete='off'
                />
                <label
                  for='email'
                  className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'
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
                  autocomplete='off'
                />
                <label
                  for='password'
                  className='peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'
                >
                  Password
                </label>
              </div>
              <button
                onclick='javascript:void(0);'
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
