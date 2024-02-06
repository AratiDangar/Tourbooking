import React from 'react'
import{Navigate, Route,Routes} from 'react-router-dom'
import Home from './../Pages/Home'
import Tour from './../Pages/Tour'
import TourDetail from './../Pages/TourDetail'
import Login from './../Pages/Login'
import Register from './../Pages/Register'
import SearchResultList from './../Pages/SearchResultList'
import ThankYou from '../Pages/ThankYou'

const Routers = () => {
  return (
    <Routes>

        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
         <Route path='/tours' element={<Tour/>}/>
          <Route path='/tours/:id' element={<TourDetail/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/about' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
            <Route path='/tours/search' element={<SearchResultList/>}/>
    </Routes>
  )
}

export default Routers
