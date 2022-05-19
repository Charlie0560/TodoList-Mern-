const router = require("express").Router();
const Todo = require("../models/Todos")

router.post("/", async(req,res)=>{
    const newTodo = new Todo(req.body);
    try{
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
        console.log("Todo added successfully");
    }catch(err){
        console.log(err);
    }
})


router.get("/", async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
        console.log(todos);
    }
    catch(err){
        console.log(err);
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        });
        res.status(200).json(todo);
    }
    catch(err){
        console.log(err);
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Todo has been deleted successfully");
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;