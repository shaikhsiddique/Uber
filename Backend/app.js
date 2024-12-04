const express=  require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const connectToDb = require("./config/db");
const userRoutes = require('./routes/user.routes');
connectToDb();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users",userRoutes);


app.get('/',(req,res)=>{
    res.send("hello world");
})

module.exports = app;