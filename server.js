
const express = require ('express')
const cors = require('cors')
const morgan= require('morgan')
const dotenv=require('dotenv')
const colors =require('colors')
const connectDb = require('./config/connectDb')
const userRoute =require('./routes/userRoute')
//config dot env file
dotenv.config();


//database call
connectDb();

//rest object
const app=express();

//middlware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/users',require('./routes/userRoute'))
//port
const PORT=8080 || process.env.PORT;

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});


