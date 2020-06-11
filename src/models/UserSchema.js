const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        minlength:3,
    },
    cpf: {
        type: String,
        unique:true,
        minlength: 11
    },
    email:{
        type:String,
        unique:true
    },
    phone: {
        type:Number,
        unique:true
    },
    job: {
        career: {
            type:String
        },
        company:{
            type:String
        }
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('user', userSchema)