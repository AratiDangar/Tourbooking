import React from 'react'
import '../styles/login.css'
import { useState,useContext } from 'react'
import logo from '../assets/images/loginicon.png'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import { Link ,useNavigate} from 'react-router-dom'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../Context/AuthContext'
import { BASE_URL } from '../utils/config'
const Login = () => {
  
  const [credentials,setCredentials]=useState({
   
   email:undefined,
   password:undefined
})
const {dispatch}=useContext(AuthContext)
const navigate=useNavigate()

  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))};


const handleClick=async e=>{
        e.preventDefault();
        dispatch({type:'LOGIN_START'})
        
        
        try {
          const res=await fetch(`${BASE_URL}/auth/login`,{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify(credentials)
            
          })

          const result=await res.json()
          if(!res.ok) alert(result.message)
        
         dispatch({type:'LOGIN_SUCCESS',payload:result.data})
        
   navigate('/')
          
         } catch (err) {
          dispatch({type:'LOGIN_FAILURE',payload:err.message})
         }
}


  return <section className='login'>
    <Container>
      <Row>
        <Col lg='8' className='img m-auto'>
          <div className="login_container d-flex justify-content-between gap-4">
             <div className="login_img">
             <img src={logo} alt="" />
             </div>
             <div className="login_form">
              <div className="login">
                <img src={userIcon} alt="" />
              </div>
              <h2 className=''>
            Login
          </h2>
          <Form onSubmit={handleClick} className=''>
           
            <FormGroup><input onChange={handleChange} required type="email" placeholder='Email address' id='email' value={credentials.email}/></FormGroup>
            <FormGroup><input onChange={handleChange} required type="password" placeholder='Enter password' id='password' value={credentials.password} /></FormGroup>
          
          
          
          <Button className='secondary_btn auth' type='submit' onSubmit={handleClick}>Login</Button>
          
          </Form>   
          <p>
            Don't have an account?
            <Link to='/register'>Create</Link>
            </p>  
             </div>
          </div>
        
        
          
        
        </Col>
      </Row>
    </Container>


  </section>
}

export default Login
