import authRouter from './routes/authRouter.js'
import messageRouter from './routes/messageRouter.js';
import userRouter from './routes/userRouter.js';
import express from 'express'
import mongodb from './database/mongodb.js';
import cors from 'cors';

const app = express();

mongodb.connectToDatabase();

app.use(cors())
app.use(express.json())
app.use("/auth", authRouter);
app.use("/messages", messageRouter)
app.use("/user", userRouter);
app.listen(3000);