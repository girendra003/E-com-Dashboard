const mongoo = require('mongoose');
// const bcrypt = require('bcrypt');


const userSchema = new mongoo.Schema({
    name: String,
    email: String,
    password: String
})

// Hash and salt the password before saving it to the database
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     try {
//         const hashedPassword = await bcrypt.hash(this.password, 10); // Use a suitable saltRounds value
//         this.password = hashedPassword;
//         next();
//     } catch (err) {
//         return next(err);
//     }
// });

module.exports = mongoo.model('users', userSchema);
