import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.js";
import 'dotenv/config';
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Express App
const app = express();

// Assigning Port
const port = process.env.PORT || 4000;

//Connections
await connectDB()
await connectCloudinary()

// Allow Multiple Origins
const allowedOrigins = ['https://aaahar-food-delivery-app.vercel.app']

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin : allowedOrigins, credentials: true}));

// Routes
app.get('/', (req, res)=> res.send("API is Working"));
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

app.listen(port, ()=>{
    console.log(`Server is up and running on port http://localhost:${port}`)
})
