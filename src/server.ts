import express from 'express'

import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import {createJWT, protect} from './modules/auth'
import { signin } from './handlers/user'


const app= express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res,next) =>{
  res.json({message:'hello'})
 

})
app.use('/api',protect,router);
app.post('/user',createJWT);
app.post('/signin',signin);
app.use((err,req,res,next)=>{
   if(err.type === 'auth'){
    res.status(401).json({meassage:"unauthorised"})

   }else if(err.type === 'input'){
    res.status(400).json({message :"invalid input"})
   }else{
    res.ststus(500).json({message:"oops that  on us"})
   }
  
}) 

export default app