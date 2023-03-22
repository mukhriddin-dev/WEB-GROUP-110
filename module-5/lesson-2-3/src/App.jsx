import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useState } from 'react'

// import Todos from './pages/Todos'

const App = () => {
  
  let [number, INCREMENT] = useState(1)

  console.log(number)

  const btnStyle = {
    padding: '6px 12px',
    background: 'green',
    margin: '50px auto',
    display: 'block',
    color: '#fff'
  }

  return (
    <>
      <Header />
      <main>
        <h1>{number}</h1>
        <button
          style={btnStyle}
          onClick={() => {
            INCREMENT(number + 1)
          }}
        >
          INCREMENT
        </button>
      </main>
      <Footer />
    </>
  )
}

export default App
