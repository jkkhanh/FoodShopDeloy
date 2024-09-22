import foodModel from './../models/foodModel.js';
import fs from 'fs'



//add food item
const addFood = async (req,res) => {
     // Lấy tên tệp hình ảnh từ yêu cầu
    let image_filename = `${req.file.filename}`;

     // Tạo một đối tượng food mới
    const food= new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try{
        await food.save();
        res.json({
            success: true,
            message: "Thêm sản phẩm thành công!"
        })
    }catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Thêm sản phẩm thất bại!"
        })
    }

}

//All food list 
const listFood = async(req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data: foods
        })        
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

//Remove food item
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () =>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Xóa sản phẩm thành công!"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

export {addFood,listFood,removeFood}