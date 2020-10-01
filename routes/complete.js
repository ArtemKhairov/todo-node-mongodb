// const express = require('express');
// const router = express.Router();
// const Todos = require('../models/Todos');

// router.put('/complete', async (req, res)=>{
//   const todo = await Todos.findById(req.body.id)
  
//   // Изменить на findandUpdate
//   todo.completed = !!todo.completed
//   await todo.save()

//   res.redirect('/');
// })


// module.exports = router;