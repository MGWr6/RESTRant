const React = require('react')

// Fill in the Def function with a return statement that includes the HTML skeleton you wish all of your pages to include.
function Def (html) {
  return (
    <html>
      <head>
        <title>*linked to default.jsx*</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        {/* BOOTSTRAP CDN LINK (long) */}
        {/* Below, for href, you don't need to put the word 'public' in your path even though the folder is called that. Since we told Express what our static folder is called, it already knows to look there! */}
        <link rel="stylesheet" href="/css/style.css"></link>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  )
}

// Def is a component, note that it is capitalized
// By creating this default view, we can just concentrate on each page content itself. This means, for every other page we won't need to worry about the HTML skeleton or anything like that, we just get to create a snippet of code that is unique to that page



module.exports = Def