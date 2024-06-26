import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './Middlewares/db.js';
import userRouter from './Routes/userRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

//Middlewares
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
    
)); 
app.use(express.json());
app.use(cookieParser());

//Endpoints
app.use('/api/user', userRouter);


app.get('/', (req, res) => {
    res.send("Requesting for backend apis");
})

app.listen(PORT, () => {
    console.log("Server running on http://localhost:"+PORT);
})