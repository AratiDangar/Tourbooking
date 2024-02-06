import express from 'express'
import User from "./../models/User.js"

//create user
export const createUser=async(req,res)=>{

    try {
        // Create a new document using the model and request body
        const newData = new User(req.body);
    
        // Save the document to the database
        const a1=await newData.save();
    
        // Respond with a success message
        //res.status(201).json({ message: 'Data successfully added to MongoDB' });
        res.json({a1})
      } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
//update user
export const updateUser=async (req, res) => {

    const id=req.params.id
   try {
     // Create a new document using the model and request body
     const updateUser =  await User.findByIdAndUpdate(id,{
       $set:req.body
     },{new:true});
 
     // Save the document to the database
     const a2=await newData.save();
 
     // Respond with a success message
     res.json(a2);
   } catch (error) {
     // Handle errors
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }}


   //get single user
      export const getUser=async (req, res) => {

    
   try {
           const getuser=await Tour.findById(req.params.id)
           res.json(getuser)
    
   } catch (error) {
     // Handle errors
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }}

//delete user
   export const deleteUser=async (req, res) => {

    
    try {
            const getuser=await Tour.findByIdAndDelete(req.params.id)
            res.json(getuser)
     
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }}

    //get all user
   export const getalluser=async (req, res) => {
               //for pagination
     
    try {
            const getuser=await Tour.find({});
            res.json(getuser)
     
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }}