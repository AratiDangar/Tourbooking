import React, { useRef,useEffect,useContext } from 'react'

import {Container,Row,Button,Col} from 'reactstrap'
import logo from '../../assets/images/logo.png'
import './header.css'
import {NavLink,Link,useNavigate} from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
const nav_links=[
  {
    path:'/',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

]
const Header = () => {
  const menuRef=useRef(null)
const headerRef=useRef(null);
const navigate=useNavigate()
const {user,dispatch}=useContext(AuthContext)

const logout=()=>{

  dispatch({type:'LOGOUT'});
  navigate('/')
}



const stickyHeaderFunc=()=>{
window.addEventListener('scroll',()=>{

  if(
    document.body.scrollTop>80 ||
    document.documentElement.scrollTop>80
  ){
    headerRef.current.classList.add('sticky_header')
  }
  else{
    headerRef.current.classList.remove('sticky_header')
  }
})

}
useEffect(()=>{
  stickyHeaderFunc();
  return window.removeEventListener('scroll',stickyHeaderFunc);
})

const toggleMenu=()=>menuRef.current.classList.toggle("show_menu")

  return (
   <header className="header " ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between " >
        { /*==========logo===========*/}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          { /*==========menu start===========*/}
          <div className="navigation " ref={menuRef} onClick={toggleMenu}>
            <ul className="menu d-flex align-items-center gap-5">
            {
              nav_links.map((item,index)=>(
                <li className="nav_items" key={index}>
                  <NavLink to={item.path} className={
                    navClass=>navClass.isActive?"active_link":''
                  }>{item.display}</NavLink>
                </li>
              ))
            }
            </ul>
          </div>
          <div className="nav_right d-flex align-items-center gap-4">
            <div className="nav_btns d-flex align-items-center gap-4">
            

        
                 
            {
                   user ?(
                    <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                    </>
                   ):(
                    <>
                    <Button className=' secondary_btn'><Link to='/login'>
                Login</Link></Button>
                <Button className=' secondary_btn'><Link to='/register'>
                Register</Link></Button>
                    </>
                   )

             }  
              
                    
                    
                   

             
             
              
            </div>

            <span className="mobile_menu" onClick={toggleMenu}>

              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
   </header>
  )
}

export default Header
/*

    {state.isAuthenticated ? (
        <div className='d-flex align-items-center pt-0'>
       
       <span className='d-inline-block'>Welcome, Arati!</span>
         
          <Button className=' secondary_btn pt-0 d-inline-block m-5'  onClick={logout}>
              Logout</Button>
        
          
        </div>
      ) : (  <>
        <p className='pt-2'>Please login</p>
        <Button className=' secondary_btn'><Link to='/login'>
        Login</Link></Button>
        <Button className=' secondary_btn'><Link to='/register'>
        Register</Link></Button></>
      )}
*/