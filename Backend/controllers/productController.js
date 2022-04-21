
const Product = require("../models/productModal")

exports.getAllProducts = (req, res) => {

    res.status(200).json({
        message: "Route is working good."
    })
}

exports.createProduct = async (req,res) =>{

    const product = await Product.create(req.body)

    res.status(201).json({
        success : true,
        product

    })
}

