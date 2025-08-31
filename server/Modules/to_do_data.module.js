import mongoose from "mongoose";


const DataSchema=mongoose.Schema({

    Title:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    Status:{
        type:Boolean,
        default:false,
    }
});

export const Data=mongoose.model("Data",DataSchema);

