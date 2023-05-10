import express from 'express';
import User from '../schemas/userSchema.js'
const userRouter = express.Router();

userRouter.get("/:username", async function(request, response) {
    const {
        username
    } = request.params;

    try {
        const user = await User.findOne({
            username: username.toLowerCase()
        })

        if (!user) {
            response.status(404).send(false);
        } else {
            response.status(200).send(user._id);
        }
    } catch {
        response.status(500).send(false);
    }
});

export default userRouter;