const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://garvits093:YHDLGuaCHo4ge8DE@cluster0.iokxe.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completes:Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports = {
    todo:todo
}