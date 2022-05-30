const router = require('express').Router()
// the express.Router() function is used to create a new router object in your program to handle requests

router.get('/', (req, res) => {
  res.send('GET /places')
})


module.exports = router
// Module exports are the instructions that tell Node. js which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.