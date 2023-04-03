import React, { useEffect, useState } from 'react'
import TableRow from '../../ui/TableRow'
import post from '../../api/post'

const index = () => {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)

  async function getAll () {
    try {
      const response = await post.getAllPost()
      const result = await response.data

      if (result) {
        setData(result)
        setLoad(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getAll()
  }, [])
    
    
    
    
    
    if (!load) { 
   return <h1 className='text-center text-2xl'>LOADING . . .</h1>
    }


  return (
    <div>
      <h1>Home</h1>

      <table className='w-[900px] bg-white p-2 m-4 text-center'>
        <thead>
          <tr>
            <th>ID</th> <th>title</th> <th>status</th> <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return <TableRow ind={index} data={item} key={index} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default index
