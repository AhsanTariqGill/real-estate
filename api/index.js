import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routers/user.router.js';
import authRouter from './routers/auth.router.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Server connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
});


const app = express();
app.use(express.json());

app.listen(3000, ()=> {
    console.log('Server is running on port 3000!!');
    // ok
});

app.use("/api/user", userRoute)
app.use("/api/auth", authRouter)