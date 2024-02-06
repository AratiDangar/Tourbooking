import express from "express"
import { createBooking, getAllBooking, getSingleBooking } from "../controllers/bookingController.js";
import { verifyAdmin, verifyUser } from "../utills/verifyToken.js";
const router=express.Router();




router.post("/",verifyUser,createBooking)
router.get("/:id",verifyUser,getSingleBooking)
router.get("/",verifyAdmin,getAllBooking)
export default router