import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import post from '../../api/post'
import Loader from '../../ui/Loader'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { ToastContainer, toast } from 'react-toastify'


const PostItem = () => {
  const { id } = useParams()
  const back = useNavigate()
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(false)
  const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const navigate = useNavigate();

  useEffect(() => {
    post.getPostItem(id).then(item => {
      setData(item.data)
      setLoad(true)
    })
  }, [id])

    console.log(data)
    

    const updatePost = () => {
        const newPost = {
            title: title,
            body: body,
        }

        if (newPost.title.length === 0 & newPost.body.length === 0) {
            toast.error("Please fill in the title and body");
        } else {
            post.updatePost(id, newPost);
            toast.success("Post updated successfully");
            setTimeout(() => {
                navigate("/posts");
            },1000)
        }
}




  if (!load) {
    return <Loader />
  }

  return (
    <div className='bg-white w-[80%] p-6 wrapper rounded shadow'>
      <button
        className='bg-green-400 focus:ring-4 absolute end-2 px-3 py-2'
        onClick={() => back(-1)}
      >
        GO BACK
      </button>
      <ul>
        <li className='flex'>
          Post title: <h4 className='font-bold'>{data?.title}</h4>
        </li>
        <li>Post body: {data?.body}</li>
        <li>Post ID : {id}</li>
      </ul>

      <div className='p-5 my-5 shadow'>
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
          text='save'
          fun={updatePost}
        />
          </div>
          <ToastContainer position="top-center" autoClose={800} />
    </div>
  )
}

export default PostItem
