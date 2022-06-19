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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>  
        <link rel="stylesheet" href="/css/style.css"></link>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add a Place</a>
            </li>
          </ul>
        </nav>
        <div className="content">
          {html.children}
        </div>
        <footer>
          <div className="stickyicon-list">  
            <a href="https://www.facebook.com/" className="facebook">   
            <i className="fa fa-facebook"></i>   
            </a>   
            <a href="https://github.com/" className="github">
            <i className="fa fa-github"></i> 
            </a>     
            <a href="https://www.linkedin.com/" className="linkedin">   
            <i className="fa fa-linkedin"></i>   
            </a>  
            <a href="#twitter" className="twitter">   
            <i className="fa fa-twitter"></i>   
            </a> 
            <a href="#google" className="google">   
            <i className="fa fa-google"></i>   
            </a>     
            <a href="#instagram" className="instagram">   
            <i className="fa fa-instagram"></i>   
            </a>                              
            <a href="#youtube" className="youtube">   
            <i className="fa fa-youtube"></i>   
            </a>
          </div>     
        </footer>
      </body>
    </html>
  )
}

// Def is a component, note that it is capitalized
// By creating this default view, we can just concentrate on each page content itself. This means, for every other page we won't need to worry about the HTML skeleton or anything like that, we just get to create a snippet of code that is unique to that page


module.exports = Def