import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/anonymousMessages', {
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