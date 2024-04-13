import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import myUserRoute from "./routes/MyUserRoutes"


mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));


const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

//api/my/user

app.use("/api/my/user",myUserRoute)


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
