import orderModel from "../models/orderModel.js";
import userModel from './../models/userModel.js';
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//Placing user order for frontend
const placeOrder = async (req,res) => {
    const frontend_url = "http://localhost:5173"

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "VND",
                product_data: {
                    name: item.name
                },

                unit_amount: item.price 
            },

            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency:"VND",
                product_data: {
                    name: "Shipper VN"
                },
                unit_amount: 20000
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({
            success: true,
            session_url: session.url
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}


const verifyOrder = async (req,res) => {
    const {orderId,success} = req.body;
    try {
        if (success == "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            res.json({
                success: true,
                message: "Paid"
            })
        }
        else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({
                success: false,
                message: " Not paid"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}

//User order for frontend
const userOrders = async (req,res) => {
    
    try {
        const orders = await orderModel.find({userId: req.body.userId})
        res.json({
            success: true,
            data: orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
        
    }
}


//List orders for admin food
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({
            success: true,
            data: orders
        })
    } catch (error) {
         console.log(error)
         res.json({
            success: false,
            message: "Error"
         })
    }
}


//api for updating order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status});
        res.json({
            success: true,
            message: "Đã cập nhật trạng thái"
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}



export {placeOrder,verifyOrder,userOrders,listOrders,updateStatus}
