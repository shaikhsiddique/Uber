const express=  require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const cookie_parser = require('cookie-parser');


const connectToDb = require("./config/db");
const userRoutes = require('./routes/user.routes');
const captianRoutes = require('./routes/captian.routes');

connectToDb();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookie_parser());

app.use("/users",userRoutes);
app.use("/captian",captianRoutes);


app.get('/',(req,res)=>{
    res.send("hello world");
})

module.exports = app;