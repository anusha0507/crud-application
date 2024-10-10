import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/user.route.js';


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

app.use("/api", route);

mongoose.connect(URL).then(()=>{

    console.log("Database connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is listening on port : ${PORT}`);
        
    })
    
}).catch(error => console.log(error))
