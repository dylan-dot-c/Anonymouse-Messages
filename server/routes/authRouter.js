import express from "express";
import User from '../schemas/userSchema.js'
import dotenv from "dotenv";
import mongodb from "../database/mongodb.js";

// I need to handle web tokens

mongodb.connectToDatabase();
dotenv.config();

const authRouter = express.Router();

authRouter.post("/login", async function(req, res) {
    const {
        username,
        password
    } = req.body;

    try {

        const user = await User.findOne({
            username: username.toLowerCase()
        });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const result = await user.comparePassword(password);
        if (!result) {
            return res.status(401).send("Incorrect password");
        }
        // const token = jwt.sign({ username }, process.env.ENCRYPTION_KEY);
        // res.json({ token, user });
        res.json(user)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


authRouter.post("/register", async function(req, res) {
    const {
        firstName,
        lastName,
        username,
        email,
        password
    } = req.body;

    try {
        const user = new User({
            firstName,
            lastName,
            username,
            password,
            email,
            messages: []
        });



        user.save();

        res.status(201).json(user.toObject());

    } catch (error) {

        console.error(error);
        res.status(500).send("Internal Server Error");

    }
});

export default authRouter;