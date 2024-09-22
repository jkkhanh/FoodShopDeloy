import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://reactfs:252508@reactfsk.jy2rt.mongodb.net/reactfs'). then(() => console.log("DB connected"))
}