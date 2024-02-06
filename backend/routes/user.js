import express from 'express'

import { createUser, deleteUser, getUser, getalluser, updateUser } from '../controllers/userController.js';
const router=express.Router();

import { verifyAdmin, verifyUser } from '../utills/verifyToken.js';

//create new User

router.post('/',verifyUser,createUser)
//get all Users
router.get('/getall',verifyAdmin,getalluser)
  
  //update User
  router.put('/:id',verifyUser,updateUser);
  //get single User
  router.get('/:id',verifyUser,getUser);
  //delete User

  router.delete('/:id',verifyUser,deleteUser)


  export default router;