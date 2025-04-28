const Product = require('../models/product');

exports.addProduct = async (req, res) => {
    const result = new Product(req.body);
    const data = await result.save();
    res.send(data);
};

exports.getAllProducts = async (req, res) => {
    let result = await Product.find();
    if (result.length > 0) {
        res.send(result);
    } else {
        res.send({ result: "404" });
    }
};

exports.deleteProduct = async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
};

exports.getSingleProduct = async (req, res) => {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "404" });
    }
};

exports.updateProduct = async (req, res) => {
    const result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    );
    res.send(result);
};

exports.searchProduct = async (req, res) => {
    const result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key, $options: 'i' } },
            { company: { $regex: req.params.key, $options: 'i' } },
            { category: { $regex: req.params.key, $options: 'i' } },
            { price: { $regex: req.params.key, $options: 'i' } }
        ]
    });
    res.send(result);
};
