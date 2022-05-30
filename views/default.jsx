const React = require('react')

// Fill in the Def function with a return statement that includes the HTML skeleton you wish all of your pages to include.
function Def (html) {
  return (
    <html>
      <head>
        <title>Default View</title>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  )
}




module.exports = Def