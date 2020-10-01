const express = require('express');
const router = express.Router();
const Todos = require('../models/Todos');

router.get('/', (req, res) => {
  res.render('create', {
    titlePage: 'TODO | Create',
    // Поле для подсветки пункта меню
    isCreate:true
  })
})

router.post('/', async (req, res) => {

  const todos = new Todos({
    title:req.body.title
  })

  await todos.save()
  res.redirect('/')
})


module.exports = router;