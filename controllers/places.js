const router = require("express").Router()
// the express.Router() function is used to create a new router object in your program to handle requests

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "http://placekitten.com/250/250",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "http://placekitten.com/250/250",
    },
  ]
  res.render("places/index", { places })
})

module.exports = router
// Module exports are the instructions that tell Node. js which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.