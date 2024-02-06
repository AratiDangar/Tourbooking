import express from "express";
import Tour from "./../models/Tour.js";

//create tour
export const createTour = async (req, res) => {
  try {
    // Create a new document using the model and request body
    const newData = new Tour(req.body);

    // Save the document to the database
    const a1 = await newData.save();

    // Respond with a success message
    //res.status(201).json({ message: 'Data successfully added to MongoDB' });
    res.json({ a1 });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    // Create a new document using the model and request body
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // Save the document to the database
    const a2 = await newData.save();

    // Respond with a success message
    res.json(a2);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get single tour
export const getTour = async (req, res) => {
  try {
    const gettour = await Tour.findById(req.params.id).populate("reviews");
    res.json(gettour);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  try {
    const gettour = await Tour.findByIdAndDelete(req.params.id);
    res.json(gettour);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get all tour
export const getallTour = async (req, res) => {
  //for pagination

  try {
    const gettour = await Tour.find({}).populate("reviews");
    res.json(gettour);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get tour by search

export const getTourBySearch = async (req, res) => {
  //for pagination

  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const gettour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.json(gettour);
  } catch (error) {
    // Handle errors
    
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get featured tour

export const getFeaturedTour = async (req, res) => {
  try {
    const gettour = await Tour.find({ featured: true }).populate("reviews");
    res.json(gettour);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get tour count
export const getTourCount = async (req, res) => {
  try {
    const gettour = await Tour.estimatedDocumentCount();
    res.json(gettour);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
