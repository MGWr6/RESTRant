const React = require('react')
const Def = require('./default')
// again, we're calling the Def function we made in default.jsx and by using require, we are telling the program to look inside the default.jsx file

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <h2>Uh oh! We can't seem to find this page! It either doesn't exist or an incorrect address was entered.  ¯\_(ツ)_/¯</h2>
      </main>
    </Def>
  )
}

module.exports = error404