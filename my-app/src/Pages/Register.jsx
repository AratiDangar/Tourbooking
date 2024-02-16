import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import '../styles/login.css'
import { BASE_URL } from '../utils/config'
import { useState } from 'react'
import logo from '../assets/images/register.png'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import { Link ,useNavigate} from 'react-router-dom'
import userIcon from '../assets/images/registration.png'

const Register = () => {

  const [credentials,setCredentials]=useState({
    username:'',
    email:'',
    password:''
  
 })
 
 
const {dispatch}=useContext(AuthContext)
const navigate=useNavigate()

   const handleChange=e=>{
     setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))};
 
 
 const handleClick=async e=>{
         e.preventDefault();
         

         try {
          
          const res=await fetch(`${BASE_URL}/auth/register`,{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(credentials)
          })
          
          const result=await res.json()
        
          if(!res.ok) alert(result.message)

          dispatch({type:'REGISTER_SUCCESS'})
          navigate('/login')
          
         } catch (err) {
             alert(err.message)
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
          Registration
        </h2>
        <Form onSubmit={handleClick}>
          <FormGroup><input onChange={handleChange} required type="text" placeholder='Enter your Name'value={credentials.userName} id='username' /></FormGroup>
          <FormGroup><input onChange={handleChange} required type="email" placeholder='Email address' value={credentials.email} id='email'/></FormGroup>
          <FormGroup><input onChange={handleChange} required type="password" placeholder='Enter password' value={credentials.password}  id='password' /></FormGroup>
          
        
        
        
        <Button className='secondary_btn auth' type='submit' onSubmit={handleClick}>Register</Button>
        
        </Form>   
        <p>
          Already have an account?
          <Link to='/login'>Login</Link>
          </p>  
           </div>
        </div>
      
      
        
      
      </Col>
    </Row>
  </Container>


</section>
}

export default Register
