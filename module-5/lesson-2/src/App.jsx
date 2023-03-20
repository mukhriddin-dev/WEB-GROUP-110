import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Card from './UI/Card'
import Button from './UI/Button'
const App = () => {



  return (
    <>
      <Header />
      <main>
        <div className='wrapper'>
          <Card title='This card title 1' img="https://picsum.photos/id/214/300/250" description="card description lorem ipsum dolor set amet .." />
          <Card title='This card title 2' img="https://picsum.photos/id/215/300/250" description="card description lorem ipsum dolor set amet .." />
          <Card title='This card title 3' img="https://picsum.photos/id/216/300/250" description="card description lorem ipsum dolor set amet .." />
          <Card title='This card title 4' img="https://picsum.photos/id/217/300/250" description="card description lorem ipsum dolor set amet .." />
        </div>

        <Button bg="green" title="save"/>
        <Button bg="red" title="delete"/>
        <Button bg="orange" title="reset"/>
        <Button bg="blue" title="upload"/>

      </main>
      <Footer />
    </>
  )
}

export default App
