import React from 'react'
import Sidebar from '../../components/Sidebar'
import RouterLinks from '../../router/RouterLinks'

const index = () => {
  return (
    <>
      {/*header  */}
      <main className='flex'>
        <Sidebar />

        <section className='main bg-indigo-300 rounded-lg m-2 w-full p-5'>
          <RouterLinks />
        </section>
      </main>
    </>
  )
}

export default index
