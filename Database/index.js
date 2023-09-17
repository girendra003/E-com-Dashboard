const express = require("express");
require("./db/config.js");
const userModal = require("./db/user.js");
const product = require("./db/product.js");
const cors = require("cors");
const app = express();
// --------------------------------jwt authentication
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

app.use(cors());
app.use(express.json());

app.get("/", async (req, resp) => {
  const result = await userModal.find();
  resp.send(result);
  resp.end();
});
app.post("/register", async (req, resp) => {
  let data = new userModal(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result["password"];
  if(result){
    Jwt.sign({result},jwtKey,{expiresIn:"2hr"},(err,token)=>{
      if(err){
        resp.send({ result: "Someting went wrong, Please try again later" });
      }else{
        resp.send({ result, auth: token });

      }
    })
  }
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await userModal.findOne(req.body).select("-password");
    if (userModal) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({ result: "Someting went wrong, Please try again later" });
        } else {
          resp.send({ user, auth: token });
        }
      });
    } else {
      resp.send({ result: "404" });
    }
  } else {
    resp.send({ result: "notFilled" });
  }
});

app.post("/add-product",verifyToken, async (req, resp) => {
  const result = new product(req.body);
  const data = await result.save();
  resp.send(data);
});

app.get("/products",verifyToken, async (req, resp) => {
  let result = await product.find();
  if (result.length > 0) {
    resp.send(result);
  } else {
    resp.send({ result: "404" });
  }
});

app.delete("/delete/:id",verifyToken, async (req, resp) => {
  const result = await product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/products/:id",verifyToken, async (req, resp) => {
  const result = await product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "404" });
  }
});
// ------------------------------api to update product data;
app.put("/update/:id",verifyToken, async (req, resp) => {
  const result = await product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "404" });
  }
});
// ----------------------------api to search data in product
app.get("/search/:key",verifyToken, async (req, resp) => {
  const result = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: +req.params.key } },
      { price: { $regex: +req.params.key } },
    ],
  });
  resp.send(result);
});

function verifyToken(req,resp,next){
  let token = req.headers['authorization'];
  if(token){
    token = token.split(' ')[1];
    Jwt.verify(token,jwtKey,(err,valid)=>{
      if(err ){
          resp.status(401).send({result:'Please Enter valid token'})
      }else{
        next();
      }
    })
  }else{
    resp.status(403).send({result:'Please provide token with header'})
  }
}
app.listen(4000);
