import NavBar from './components/Navbar'
import Header from './components/Header'
import './index.css'
import Newsletter from './components/Newsletter'
import Bento from './components/Bento'


function App() {

  return (
    <>
      <NavBar />
    
      <Header />      
      
      <main className='mb-12 w-4/5 mx-auto'>
        <Bento />
        <Newsletter />
      </main>
    </>
  )
}

export default App
