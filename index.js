require('dotenv').config()
const express = require('express')
const app = express()

// HOMEPAGE
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// WILDCARD ROUTE
app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>')
})
// wilcard route must be at the bottom of other routes otherwise it will override all other pages

app.listen(process.env.PORT)
// this pulls the PORT variable from the .env file