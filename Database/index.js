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
})
app.post('/myweb1',async(req,resp)=>{
    const data = new user(req.body);
    const result = await data.save();
    resp.send(result)
});

app.listen(3003);