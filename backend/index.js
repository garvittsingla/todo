const express = require("express")
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())


app.post('/todos',async (req,res)=>{
    const createPayload  = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if (!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"ToDo created successfully"
    })
})

app.get('/todos',async (req,res)=>{
    const todos = await todo.find()
    res.json({
        todos
    })

})
app.put('/completed',async (req,res)=>{
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent some srong inputs"
        })
        return
    }
    await todo.update({
        _id:req.body.is
    },{
        completed:true
    })
    res.json({
        msg:"ToDo marked as completed"
    })


})
app.listen(3000)