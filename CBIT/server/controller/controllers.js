const express=require('express')
const Router=express.Router()
const it1=require('../model/models')
Router.get('/',async(req,res) =>{
    try{
        const r=await it1.find()
        res.json(r)
    }
    catch(err){
        res.send(err)
    }
})
Router.get('/:id',async(req,res) =>{
    try{
        const r=await it1.findById(req.params.id)
        res.json(r)
    }
    catch(err){
        res.send(err)
    }
})
Router.post('/',async(req,res)=>{
    const con1=new it1 ({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1=await con1.save()
        res.json(a1)
    }
    catch(err){
        res.send(err)
    }
})
module.exports=Router