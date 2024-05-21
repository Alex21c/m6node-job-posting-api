/**
 * ## Objectives
 * To Create a JOB Posting API with following CRUD operations:

 * 
 * 
 */

import 'dotenv/config';
import express from 'express';
import UserRoutes from './Routes/User.Routes.mjs';
import JobRoutes from './Routes/Job.Routes.mjs';
import mongoose from 'mongoose';
import AuthenticateUser from './Middlewares/AuthenticateUser.Middleware.mjs';
import cors from 'cors';
import morgan from 'morgan';

  try {
   
  
  // Creating a express server
    let server = express();
    const PORT = process.env.PORT ? process.env.PORT : 3000;

    // Middleware for logging errors
    server.use(morgan('dev'));

  // Connecting to DB

    // console.log(process.env.MONGODB_CONNECTION_STRING);
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=>{ console.log('Connection Established with Database!');})
    .catch((error)=>{
      throw new Error('Unable to connect to DB');
    });

  // Making a Database Connection
  

  
  // Allowing me to parse req.body
    server.use(express.json());
  
  // Use the CORS middleware, such that from localhost i can make requests
    // server.use(cors({
    //   origin: 'http://localhost:3000' // Allow requests from this origin
    // }));

    // server.use(cors({
    //   origin: 'https://frontend-m6node-day-7-project-url-shortener-application.vercel.app' // Allow requests from this origin
    // }));


  // Linking Routes
    server.use("/api/v1/user", UserRoutes);    
    server.use("/api/v1/job", JobRoutes);
    
  // launching server
    server.listen(PORT, ()=>{
      console.log(`Express Server is up and running at port ${PORT}`);
    });

  } catch (error) {
    console.log('Index.mjs ERROR: ' +  error.message)
  }


