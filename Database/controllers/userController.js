const User = require('../models/user');
const jwt = require('jsonwebtoken');
const jwtKey = "e-comm";

exports.getAllUsers = async (req, res) => {
    const result = await User.find();
    res.send(result);
};

exports.registerUser = async (req, res) => {
    let data = new User(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    if (result) {
        jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                res.send({ result: "Something went wrong, Please try again later" });
            } else {
                res.send({ result, auth: token });
            }
        });
    }
};

exports.loginUser = async (req, res) => {
    if (req.body.email && req.body.password) {
        const user = await User.findOne(req.body).select("-password");
        if (user) {
            jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    res.send({ result: "Something went wrong, Please try again later" });
                } else {
                    res.send({ user, auth: token });
                }
            });
        } else {
            res.send({ result: "404" });
        }
    } else {
        res.send({ result: "notFilled" });
    }
};
