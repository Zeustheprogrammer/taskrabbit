import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT
import mongoose  from "mongoose";





const app = express()


mongoose.connect('mongodb+srv://zeusop:shanthan@cluster0.331jl.mongodb.net/')
.then((data)=> {
    console.log(data)
    app.listen(PORT, ()=> {
        console.log(`Server is listening on Port ${PORT}...`)
    })
}).catch((err)=> {
    console.log(err.message)
    console.log('Error while connecting to mongodb')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.route('/').get((req,res)=> {
    res.end('hello ')
}) 

