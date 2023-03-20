import './index.scss'

const index = props => {
  
  console.log(props.title)
  console.log(props)
  const isActive = true

  const cardStyle = {
    width: '300px',
    boxShadow: '0 0 10px silver',
    borderRadius: '20px',
    margin: '50px auto',
    opacity: isActive ? '1' : '0.5'
  }

  return (
    <div className='card' style={cardStyle}>
      <img src={props.img} alt='img' className='card-img' />
      <div className='card-body'>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-text'>{props.description}</p>
      </div>
    </div>
  )
}

export default index
