import express from 'express'
import  mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes/userRoute.js'


const app= express()

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT=process.env.PORT || 7000
const URL=process.env.MOGOURL 
// console.log(URL);

mongoose.connect(URL).then(()=>{
    console.log("DB Connected Successfully");

    app.listen(PORT,()=>{
        console.log(`server is running of port is ${PORT}`);
    })
}).catch(error => console.log(error)) 


app.use("/api",route)