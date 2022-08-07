const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const {Schema, model} = mongoose

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},{
    versionKey:false,
    timestamps: true
})

UserSchema.pre('save', function(next){
    console.log(this.email, this.password)
    const hasdhedPassword = bcrypt.hashSync(this.password, 12)
    this.password = hasdhedPassword
    console.log(this.email, this.password)
    next()
})

const UserModel = model('users', UserSchema)

module.exports = UserModel