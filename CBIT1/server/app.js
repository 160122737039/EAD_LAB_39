const express=require('express')
const mongoose=require('mongoose')
const mPath=require('./controller/controllers')
const app=express()
const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
mongoose.connect(url)
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected')
})
app.use(express.json())
app.use('/controllers',mPath)
app.listen(3000,()=>{
    console.log('server started')
})


