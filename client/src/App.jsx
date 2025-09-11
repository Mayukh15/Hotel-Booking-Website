import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Allrooms from './pages/Allrooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelowner/Layout'
import Dashboard from './pages/hotelowner/Dashboard'
import AddRoom from './pages/hotelowner/AddRoom'
import ListRoom from './pages/hotelowner/ListRoom'

const App = () => {

  const ownerpath=useLocation().pathname.includes("owner")
  return (
    <div>
      {!ownerpath && <Navbar/>}
      { false && <HotelReg/>}
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Allrooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='Add-Room' element={<AddRoom/>}/>
          <Route path='List-Room' element={<ListRoom/>}/>

        </Route>
       </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
