import NavBar from './components/Navbar'
import Header2 from './components/Header2'
import './index.css'
import Bento from './components/Bento'

function App() {

  return (
    <>
      <NavBar />
    
      <Header2 />      
      
      <main className='flex justify-center mb-12'>
        <Bento />
      </main>
    </>
  )
}

export default App
