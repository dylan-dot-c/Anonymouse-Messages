import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate : true
    });
    console.log('Connected to MongoDB on port 27017');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default {connectToDatabase};