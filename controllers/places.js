const router = require('express').Router()
const db = require('../models')

// INDEX ROUTE
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
      res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
      res.render('error404')
  })
})

// POST ROUTE - Create a new Place
router.post('/', (req, res) => {
   db.Place.create(req.body)
   .then(() => {
      res.redirect('/places')
   })
   .catch(err => {
      console.log('err', err)
      res.render('error404')
   })
})
// Note: Sending in the req.body object works in lieu of spelling everything out ONLY if the fields in your form are named exactly like your database fields.

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

// Module exports are the instructions that tell Node. js which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.