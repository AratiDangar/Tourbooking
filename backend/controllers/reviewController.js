import Tour from "../models/Tour.js"
import Review from '../models/Reviews.js'
export const createReview=async(req,res)=>{


       const tourId=req.params.tourId;
       const newReview= new Review({...req.body})


    try {
        const savedReview=await newReview.save()
     
        
        //after creating new review , now updating the review array of tour

        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })

        res.json({message:"review submitted",data:savedReview})
    } catch (err) {
        
        res.json({message:"review not submitted"})
    }
}