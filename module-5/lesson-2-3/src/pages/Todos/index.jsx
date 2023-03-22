import React from 'react'

const index = ({ name, children }) => {
  return (
    <div>
      <h1>Todos </h1>
      {name}
      {children}
    </div>
  )
}

export default index
