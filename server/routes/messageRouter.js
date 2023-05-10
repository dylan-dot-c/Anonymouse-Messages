import express from 'express'
import User    from '../schemas/userSchema.js';
import Message from '../schemas/messageSchema.js'
const messageRouter = express.Router();



messageRouter.post("/:username",async function(request,response){

    const {username}                                                   = request.params;
    const {content , sender , senderId , recipient , recipientId}      = request.body;

    let message = null;

    console.log(recipient,recipientId)
    try{
        message = new Message({content , sender , senderId , recipient , recipientId});
        message.save();
    }
    catch(error){
        response.status(401).json({s : 401});
        return;
    }

    try {
        await User.findOneAndUpdate(
          { username },
          { $push: { messages: message._id } },
          { new: true }
        );

        const user = await User.findOne({username: username.toLowerCase()})
    
        if(!user){
           
            response.status(404).json({s:404});
        }
        else{
            response.status(201).json(user);
        }

      } catch (error) {
        console.log(error)
    
        response.status(500).json({s:500});
      
    }

})

messageRouter.get("/:username" , async function(request,response){
    const {username} = request.params;

    const user = await User.findOne({ username });

    if (user) {
        const userWithMessages = await user.populate("messages");

        response.json({userMessages : userWithMessages.messages})
    }
    else{
        throw new Error("Error");
    }
})

export default messageRouter;