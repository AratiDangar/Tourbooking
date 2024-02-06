import Booking from '../models/Booking.js'


export const createBooking=async(req,res)=>{
  const newBooking=new Booking(req.body);
  
    try {
        const a1=await newBooking.save()

  res.json({message:"your tour is booked",data:a1})

    } catch (err) {
        console.log(err)
        res.json({message:"something happens to wrong! please try agai"})
    }
}

//get all booking
export const getAllBooking=async(req,res)=>{
    
    
      try {

        const newBooking= await Booking.find({});
          
  
    res.json({message:"success to get all booking",data:newBooking})
  
      } catch (err) {
          console.log(err)
          res.json({message:"something happens to wrong! please try again"})
      }
  }

  //get single booking
  export const getSingleBooking=async(req,res)=>{
   
    
      try {

        const newBooking=await Booking.findById(req.params.id);
        
  
    res.json({message:"success to get single booking",data:newBooking})
  
      } catch (err) {
          console.log(err)
          res.json({message:"something happens to wrong! please try again"})
      }
  }