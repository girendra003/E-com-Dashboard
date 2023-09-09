const express = require('express');
require('./db/config.js')
const user = require('./db/user.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.get('/',async(req,resp)=>{
    const result =await user.find();
    resp.send(result)
    resp.end();
})
app.post('/register',async(req,resp)=>{
    let data = new user(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result['password'];
    resp.send(result)
    resp.end();
});

app.post('/login',async(req,resp)=>{
    if(req.body.email && req.body.password){
        const result = await user.findOne(req.body).select('-password');
        if(result){
        resp.send(result);
        }
        else{
            resp.send({result:'404'})
        }
    }
    else{
        resp.send({result:'notFilled'})
    }
    resp.end();
})

app.listen(4000);