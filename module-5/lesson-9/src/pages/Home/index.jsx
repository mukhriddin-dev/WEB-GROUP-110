import React, { useEffect, useState } from 'react'
import TableRow from '../../ui/TableRow'
import post from '../../api/post'
import Label from '../../components/Label/Label'
import Loader from '../../ui/Loader'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { ToastContainer, toast } from 'react-toastify'

const index = () => {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

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

  const addPost = () => {
    const newPost = {
      title: title,
      body: body
    }

    if (newPost.title.length === 0 || newPost.body.length === 0) {
      toast.error('Please fill the title and body')
    } else {
      post.postItem(newPost)
      toast.success('Successfully added a new post')
      setTimeout(() => {
        window.location.reload()
      }, 1200)
    }
  }

  const deletePost = id => {
    post.deletePost(id)
    toast.success('Successfully deleted a post')
    setTimeout(() => {
      window.location.reload()
    }, 1200)
  }

  if (!load) {
    return <Loader />
  }

  return (
    <div className='ml-[330px]'>
      <div className='p-5 shadow'>
        <Input
          type='text'
          placeholder={'Enter post title'}
          id='title'
          Val={title}
          setVal={setTitle}
        />
        <Input
          type='text'
          placeholder={'Enter post Body'}
          id='body'
          Val={body}
          setVal={setBody}
        />

        <Button
          type='submit'
          bg='bg-green-500'
          text='Add new post'
          fun={addPost}
        />
      </div>
      <table className='w-full bg-white p-2 m-4 text-center'>
        <thead>
          <tr>
            <th>ID</th> <th>TITLE</th> <th>status</th> <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <TableRow
                ind={index}
                data={item}
                key={index}
                delFun={deletePost}
              />
            )
          })}
        </tbody>
      </table>
      <ToastContainer position='top-center' autoClose={1000} />
    </div>
  )
}

export default index
