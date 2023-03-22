import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <h4 className='text-center'>
            Copyright by {new Date().getFullYear()}
          </h4>
        </div>
      </footer>
    </>
  )
}

export default Footer
