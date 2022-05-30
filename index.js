require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWARE
app.use('/places', require('./controllers/places'))
// The first argument to app.use, /places sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.

// HOMEPAGE
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// WILDCARD ROUTE
app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>')
  // CHAINING means calling multiple methods together on the same line.
})
// wilcard route must be at the bottom of other routes otherwise it will override all other pages

app.listen(process.env.PORT)
// this pulls the PORT variable from the .env file