const mongoose = require('mongoose');
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    faName:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    hired : {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('employee',employeeSchema)