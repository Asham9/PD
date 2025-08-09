import * as dotenv from 'dotenv'
dotenv.config()

import cookieParser from 'cookie-parser';

import express from 'express'
import morgan from 'morgan';

// importing connectDB
import connectDB from './db/connect.js';

import authRouter from './routes/authRouter.js'



const app= express();


if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev')) // use to log the info about the request
}
app.use(cookieParser());
app.use(express.json())

app.get('/api/v1/test', (req, res) => {
  console.log('Login route hit'); // Make sure this logs
  res.json({ message: 'Login successful' });
});

app.use('/api/v1/auth',authRouter);



const port =process.env.PORT || 5100
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start()

