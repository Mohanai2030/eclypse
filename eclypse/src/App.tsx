
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Footer } from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Cart from './components/cart'


function App() {

  return (
    <div className='flex flex-col justify-center items-center w-[87%] ml-[6.5%]'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
