const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
    todotext: {
        type: String,
        maxlength: 500
    }
},
{timestamps: true});

module.exports = mongoose.model("Todos",TodoSchema);