const Card = props => {
  console.log(props.user)
  return (
    <>
      <div className='card'>
        <img src={props.user.avatar} alt='user' className='card-img' />
        <div className='card-body'>
          <h2 className='card-title'>
            {props.user.first_name}
            {props.user.last_name}
          </h2>
                  <p className='card-text'>{ props.user.email}</p>
        </div>
      </div>
    </>
  )
}

export default Card
