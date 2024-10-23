
import './App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Wishlist from '../src/pages/Wishlist'
import Cart from '../src/pages/Cart'



function App() {
  

  return (
    <>
    <Header/>
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Wishlist' element={<Wishlist/>} />
      <Route path='/Cart' element={<Cart/>} />
    </Routes>

    <Footer/>
     
    </>
  )
}

export default App
