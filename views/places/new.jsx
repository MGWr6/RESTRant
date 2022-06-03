const React = require('react')
const Def = require('../default')

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>  
        {/* Remember, forms have two crucial attributes: method (the HTTP verb) and action (the destination path). In our case, we want the form data to go to the POST /places route. */}
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            {/* Let's update the label and input with specific information. The most important part to remember is the name attribute of the input tag. This is important because it will be the variable name we end up using on the back-end later. Less critical, but still important, is to make a htmlFor attribute on the label that corresponds to an id attribute on the input. That is for accessibility/screen readers! */}
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
          {/* Note: JSX requires the class attribute to be written as className. */}
            <label htmlFor="pic">Place Picture</label>
            <input  className="form-control" type="url" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" required/>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>  
      </main>
    </Def>
  )
}



module.exports = new_form