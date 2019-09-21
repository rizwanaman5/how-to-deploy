const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
})

const Form = mongoose.model('Form', formSchema)
module.exports = Form