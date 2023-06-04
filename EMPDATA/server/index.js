import express from "express";
const app=express()
import mongoose from "mongoose"
import cors from "cors"
import {Empmodel} from "./models/empmodel.js"
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sabesh:monke@gc.fbevvjf.mongodb.net/').then(console.log("db done"))


app.get('/',(req,res)=>res.send("im alive"))

app.post('/populate',async(req,res)=>{
    const { name,manager,position,adhaar,ifsc,bankacc,esi,pf}=req.body
    const entryset=new Empmodel({name,manager,position,adhaar,ifsc,bankacc,esi,pf})
    try{
        const resi=await entryset.save();
        res.status(201).json({
            _id:resi._id,
            name:resi.name
        })        
    }
    catch(err){
        res.status(500).json(err);
    }
})
app.post('/grpman',async(req,res)=>{
    const {manager}=req.body;
    console.log(res.body)
    const workbymam= await Empmodel.find({manager})
    res.status(201).json(workbymam)
})
app.get('/:id',async(req,res)=>{
    const {id}=req.params
    const  person=await Empmodel.findById(id)
    res.status(201).json(person)
})
app.post('/:id',async(req,res)=>{
    const {id}=req.params
    // console.log(id);
    const { name,manager,position,adhaar,ifsc,bankacc,esi,pf}=req.body
    const person=await Empmodel.findByIdAndUpdate(id,{name,manager,position,adhaar,ifsc,bankacc,esi,pf})
    console.log(position)
    // const  person=await Empmodel.updateOne({id},{ name,manager,position,adhaar,ifsc,bankacc,esi,pf})
    res.status(201).json(person)
})
app.listen(3000,()=>console.log("Server is on 🔥"))