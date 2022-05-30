const React = require('react')

// Fill in the Def function with a return statement that includes the HTML skeleton you wish all of your pages to include.
function Def (html) {
  return (
    <html>
      <head>
        <title>Default View</title>
      </head>
      <body>
        <h1>Default View</h1>
        {html.children}
      </body>
    </html>
  )
}

// By creating this default view, we can just concentrate on each page content itself. This means, for every other page we won't need to worry about the HTML skeleton or anything like that, we just get to create a snippet of code that is unique to that page



module.exports = Def