import React from 'react'
import { user } from '../../constants/db';
import Card from '../../Card';

const Home = () => {
  return (
    <div className='home'>
      ;
      <div className='wrapper'>
        {user.length > 0 ? (
          user?.map(item => {
            return <Card key={item.id} user={item} />
          })
        ) : (
          <h1>NOT FOUND</h1>
        )}
      </div>
    </div>
  )
}

export default Home
