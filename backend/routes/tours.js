import express from 'express'

import { createTour,updateTour,getTour,deleteTour,getallTour,getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js';
import { verifyAdmin, verifyUser } from '../utills/verifyToken.js';
const router=express.Router();

//create new tour

router.post('/',verifyAdmin,createTour)
//get all tours
router.get('/getall',getallTour)
  
  //update tour
  router.put('/:id',verifyAdmin,updateTour);
  //get single tour
  router.get('/:id',getTour);
  //delete tour

  router.delete('/:id',verifyAdmin,deleteTour)
//get tourbysearch
  router.get('/search/getTourBySearch',getTourBySearch)
  
  //get featured Tour
  
  router.get('/search/getFeaturedTour',getFeaturedTour)
//get tour count

router.get('/search/getTourCount',getTourCount)

export default router;