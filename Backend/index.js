// Importing libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cors  = require('cors');

// configure env
dotenv.config();

// connect to db
connectDB();

const app = express();


// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// not needed
// Connecting to MongoDB server 
// mongoose.connect("mongodb+srv://admin:3cxZoKVSLTKDEYqD@cluster0.2n7lnbm.mongodb.net/Bliss").then(()=> {
//     console.log("Database connected successfully!");
// });


// routes 
app.options('*', cors())
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);



// rest api
app.get('/',(req,res)=>{
    res.send("<h1> Welcome to Solistice</h1>")
})


// const port = process.env.PORT || 5000;
const port = 8080;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
