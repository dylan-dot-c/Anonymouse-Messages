import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
      type: String,
      required: [true, 'Please enter the name of the sender.'],
      trim: true,
      lowercase: true
    },
    dateSent: {
      type: Date,
      required: [true, 'Please enter the date the message was sent.'],
      default: Date.now
    },
    content: {
      type: String,
      required: [true, 'Please enter the text content of the message.'],
      trim: true
    }
  });

export default mongoose.model("Message", messageSchema , "messageDatabase");