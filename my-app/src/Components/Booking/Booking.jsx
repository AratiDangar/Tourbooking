import React from 'react'
import './booking.css'
import { useState,useContext,useEffect } from 'react'
import {AuthContext} from '../../Context/AuthContext'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from '../../utils/config'
const Booking = ({tour,avgRating}) => {



    const {price,reviews,title}=tour;
    const navigate=useNavigate();

    const {user}=useContext(AuthContext)
    const [booking,setBooking]=useState({
        userId:user && user._id,
        userEmail:user && user.email,
        tourName:title ,
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })

    useEffect(() => {
        setBooking(prev => ({...prev, tourName: title}));
    }, [title]);
    
    /*const [credentials,setCredentials]=useState({
        userId:'01',
        userEmail:'arati@gmail.com',
        tourName:'',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })*/

    const handleChange=e=>{
       
setBooking(prev=>({...prev,[e.target.id]:e.target.value}));




        

    };
    const serviceFee=10;
    const totalPrice= Number(price)* Number(booking.guestSize) + Number(serviceFee);

    //send data to the server
    const clickhand=async e=>{
        e.preventDefault();
    
        
        try {
            if(!user ||user===undefined||user===null){
              alert('Please sign in')
            }
            
            const res=await fetch(`${BASE_URL}/booking`,{
              method:'post',
              headers:{
                "content-type":"application/json",
              },
              credentials:'include',
              body:JSON.stringify(booking),
            });
          console.log(booking)
            const result=await res.json()
            if(!res.ok) {
              return alert(result.message)}
          
              alert('booked successfully')
              navigate("/thank-you")
            
          } catch (err) {
            alert(err.message);
            
          }
          
          

    }
  return (
    <div className='booking'>
    <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
            ${price}
            <span>/per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center gap-1">
            <i class='ri-star-fill'></i>
          
            {avgRating===0 ? null:avgRating} ({reviews?.length})
           
        </span>

    </div>
    {/*=========bookign form======== */}
    <div className="booking_form">
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={clickhand}>
            <FormGroup>
                <input required onChange={handleChange} type="text"  placeholder='Full Name' id='fullName' />

            </FormGroup>
            <FormGroup>
                <input required onChange={handleChange} type="number" placeholder='Phone' id='phone' />

            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3 '>
                <input required onChange={handleChange} type="date"  placeholder='' id='bookAt' />
                <input required placeholder='guest' onChange={handleChange} type="number"  id='guestSize' />

            </FormGroup>
        </Form>
    </div>
    <div className="booking_bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
<h5 className='d-flex align-items-center gap-1'>
    ${price}<i class='ri-close-line'></i> 1 person</h5>
        <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
<h5>Service Charge</h5>
        <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='total border-0 px-0'>
<h5>Total</h5>
        <span>${totalPrice}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn w-100 mt-4' onClick={clickhand}> Book Now</Button>
    </div>
    </div>
  )
}

export default Booking
