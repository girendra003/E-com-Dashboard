const mongoose = require('mongoose');
const func =async()=>{
    await mongoose.connect('mongodb://localhost:27017/userDb')
}
func();
