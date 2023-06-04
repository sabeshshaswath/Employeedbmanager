import mongoose from "mongoose";
const empschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    manager:{
        type:String,
    },
    position:{
        type:String,
        required:true,
    },
    adhaar:{
        type:Number,
        required:true,
    },
    ifsc:{
        type:String,
        required:true,
    },
    bankacc:{
        type:Number,
        requird:true
    },
    esi:{
        type:Number,
        requird:true
    },
    pf:{
        type:Number,
        requird:true
    }
})

export const Empmodel=mongoose.model("Emp",empschema);