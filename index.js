require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWARE
app.set('view engine', 'jsx')
// app.set assigns setting name to a value
// syntax = app.set(name, value)
app.engine('jsx', require('express-react-views').createEngine())
// The app.engine() function is used to register the given template engine callback as ext. By default the Express itself will require() the engine based on the file extension.
// syntax = app.engine(ext, callback)
app.use('/places', require('./controllers/places'))
// The first argument to app.use, /places sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.

// HOMEPAGE
app.get('/', (req, res) => {
  res.render('home')
  // 'home' is the name of the view we just created -> home.jsx , aka the file name
  // Note: You don't have to specify the 'views' folder. It already knows to look for a 'views' folder when you call the render method!
})



// WILDCARD ROUTE
app.get('*', (req, res) => {
  res.render('error404')
  // CHAINING means calling multiple methods together on the same line.
})
// wilcard route must be at the bottom of other routes otherwise it will override all other pages

app.listen(process.env.PORT)
// this pulls the PORT variable from the .env file