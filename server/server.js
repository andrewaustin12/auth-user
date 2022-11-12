import express from "express";
const app = express();

//dotenv
import dotenv from 'dotenv'
dotenv.config()

//db
import connectDB from './db/connect.js';

//route
import authRoute from './routes/authRoute.js';

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Welcome')
});

app.use('/api/v1/auth',authRoute)

const port = process.env.PORT || 5004

const start = async() => {
  await connectDB(process.env.MONGO_URL)
  app.listen(port,() => {
    console.log(`running on ${port}`)
  })
};

start();