import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Tour from './models/Tour.js'




import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/booking.js'
dotenv.config();

const app=express();
app.use(express.json());
const port=process.env.PORT 

const corsOptions={

    origin:"https://mernbackend-hu9p.onrender.com",
    Credential:true,
    optionsSuccessStatus: 200
}


//database connection
mongoose.set("strictQuery",false) //set option manually
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,  //used to avoid depriciation warning
            useUnifiedTopology:true  //used for server monitering&discovering and active new engine
        })

        console.log("database connect")
    } catch (err) {
        
        console.log("database not connect")
    }


}
//middleware




app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());



app.use('/api/v1/tours',tourRoute);
app.use('api/v1/users',userRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/booking',bookingRoute)
//router.post('/',createTour);

app.listen(port,()=>{

        connect();
    console.log("your server is listening on port",port);
})