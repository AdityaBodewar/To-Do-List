import mongoose from "mongoose";


const DataSchema=mongoose.Schema({

    Title:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    }
});

export const Data=mongoose.model("Data",DataSchema);

