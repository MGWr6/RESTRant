require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWARE
//app.set('view', __dirname + '/views')
app.set('view engine', 'jsx')
// app.set assigns setting name to a value
// syntax = app.set(name, value)
// assigning a property to the express app
app.engine('jsx', require('express-react-views').createEngine())
// The app.engine() function is used to register the given template engine callback as ext. By default the Express itself will require() the engine based on the file extension.
// syntax = app.engine(ext, callback)
app.use(express.static('public'))
// This let's Express know that we've created a public (or static) folder and what we're calling it

app.use(express.urlencoded({ extended: true }))
// Remember, when we send data with the POST verb, that data gets encrypted for its trip across the internet. Because it is protected this way while in transit, that makes it extra safe for usernames, passwords, and other sensitive data. However, it also means we will need an extra tool to decrypt that data for us.

// CONTROLLERS & ROUTES
app.use('/places', require('./controllers/places'))
// The first argument to app.use, /places sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.



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