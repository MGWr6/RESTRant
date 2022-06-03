const router = require('express').Router()
// the express.Router() function is used to create a new router object in your program to handle requests

// GET /places
router.get('/', (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/Green-Restaurant-Design.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/Tea-House-Inside.jpg",
      // why do we not have to put public/images... it doesn't render the photo when you write it that way
    },
  ]
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places stub')
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
  res.send('GET /places/:id/edit stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})


module.exports = router
// Module exports are the instructions that tell Node. js which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.