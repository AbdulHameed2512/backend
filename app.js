import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoute";
const app = express()
app.use(express.json())
app.use('/api/user',router)
// http://localhost:5000/api/user/
mongoose.connect('mongodb+srv://Admin:RrdF0RgYZgTXQRBC@cluster0.qifyn8x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>app.listen(5000))
.then(()=>console.log('DataBase Connected !!'))




// RrdF0RgYZgTXQRBC