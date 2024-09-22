import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from './routes/foodRoute.js';
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



//app config 1
const app = express()
const port = process.env.PORT || 4000


//middleweare 2
app.use(express.json())
app.use(cors())



//DB connection 4
connectDB();



//api endpoints 5
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



// 3
app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

//mongodb+srv://reactfs:252508@reactfsk.jy2rt.mongodb.net/?retryWrites=true&w=majority&appName=Reactfsk