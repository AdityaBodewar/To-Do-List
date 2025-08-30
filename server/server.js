import express from 'express'
import cors from 'cors'
import dotenv from  'dotenv'
import mongoose from 'mongoose';
import { Data } from './Modules/to_do_data.module.js';

dotenv.config();
const app=express();
app.use(express.json());

app.use(cors());


 mongoose.connect(process.env.MONGO_ATLAS_URI)
  .then(()=>{console.log("connected successfully")})
  .catch((error)=>{console.log(error)});




const port =process.env.PORT ;  

app.get('/',(req,res)=>{

    res.send("server is running ")

})


  
app.post("/add_data",async (req,res)=>{

  
    try { 
        const data=new Data(req.body);
       
         const saved=await data.save();

         res.status(200).json(saved);  
    } catch (error) {

      res.status(500).json(error)
    }
})

app.get("/get_data",async(req,res)=>{

    try {
        const data=await  Data.find();
        res.status(200).json(data)
    } catch (error) {
        
    }
})


app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})