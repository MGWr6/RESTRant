const React = require('react')

const Def = require('./default')
// The '.' at the start of the require when we require('./default') is a cue to look in the local file system to find the resource versus a npm dependency as it does when we require('react').

function home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/pancakes.jpg" alt="Pancake Pic" />
          <div>
            Photo by <a href="https://unsplash.com/@sammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moghadeam Khamesh</a> on <a href="https://unsplash.com/s/photos/pancakes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Rant or Rave!</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home