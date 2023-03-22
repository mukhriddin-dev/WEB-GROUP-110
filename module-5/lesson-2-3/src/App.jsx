import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Todos from './pages/Todos'

const App = () => {



  // const obj = {
  //   name: "Object",
  //   child: {
  //     color: {
  //       type: {
  //         orange: "400",
  //         num:[1,2,{ok:"ok"}]
  //       }
  //     }
  //   }
  // }
  

  // const { name } = obj;
  // const { child: { color: { type: { num } } } } = obj;


  // console.log(num)


  // console.log(obj.child.color.type.orange)
  // console.log(orange)













  return (
    <>
      <Header />
      <main>
        {/* <Todos name="this is todos app"/> */}
        <Home/>
      </main>
      <Footer />
    </>
  )
}

export default App
