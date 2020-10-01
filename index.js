const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const todoRoute = require('./routes/todo');
const createRoute = require('./routes/create');
// const completeRoutes = require('./routes/complete');

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  extname:'handlebars',
  defaultLayout: 'main'
})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');
app.set('views', 'views');

// Позволяет считывать body
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.use('/complete', completeRoutes);
app.use('/create', createRoute);
app.use('/', todoRoute);


async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/todonode', {
      useNewUrlParser: true,
      useFindAndModify:false
    })
    // Запускаем сервер после того как база станет доступна
    app.listen(PORT, () => {
      console.log("Callback после запуска сервера")
    })
  } catch (e) {
    console.log(e)
  }
}

start()
