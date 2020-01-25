const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        required: true
    },
    name: String,
    avatar: String,
    likes:[{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    comments:[{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        text: {
            type: String,
            require: true
        },
        name: String,
        avatar: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema)