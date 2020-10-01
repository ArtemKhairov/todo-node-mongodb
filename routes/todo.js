const express = require('express');
const router = express.Router();
const Todos = require('../models/Todos');

router.get('/', async (req, res) => {
  const todos = await Todos.find({}).lean()
  
  res.render('index', {
    titlePage: 'TODO | HOME',
    // Поле для подсветки пункта меню
    isHome: true,
    todos

  })
})

router.post('/complete', async (req, res)=>{
  const todo = await Todos.findById(req.body.id)
  
  // Изменить на findandUpdate
  todo.completed = !todo.completed
  await todo.save()

  res.redirect('/');
})

module.exports = router;