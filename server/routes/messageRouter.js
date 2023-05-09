//Libraries
import express from 'express'

//Schemas
import User    from '../schemas/userSchema.js';
import Message from '../schemas/messageSchema.js'

// Routers
const messageRouter = express.Router();

// POST

messageRouter.post("/", async function(request,response){
    const {content,sender} = request.body;
    const message  = new User({content,sender});
    console.log(message)
    message.save();
})

messageRouter.post("/:username",async function(request,response){
    
    const {username}              = request.params;
    const {content , sender}      = request.body;

    const message = new Message({content , sender});

    message.save();
    
    try {
        await User.findOneAndUpdate(
          { username },
          { $push: { messages: message._id } },
          { new: true }
        );


        const user = await User.findOne({username: username.toLowerCase()})
    
        response.json(user);
      } catch (error) {
        console.error(error);
        response.status(500);
      }

})



// GET 
messageRouter.get("/" , async function(request,response){
    try {
        const messages = await User.find();    

    } catch (error) {
        response.send("Something went wrong while fetching messages. Implement error handling");
    }
});

// gets the messages for a particular user
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