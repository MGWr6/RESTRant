const React = require('react')

const Def = require('./default')
// The '.' at the start of the require when we require('./default') is a cue to look in the local file system to find the resource versus a npm dependency as it does when we require('react').

function home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
      </main>
    </Def>
  )
}

module.exports = home