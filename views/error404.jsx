const React = require('react')
const Def = require('./default')
// again, we're calling the Def function we made in default.jsx and by using require, we are telling the program to look inside the default.jsx file

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <h2>Uh oh! We can't seem to find this page! It either doesn't exist or an incorrect address was entered.  ¯\_(ツ)_/¯</h2>
        <div>
          <img src="/images/uh-oh-monkey.jpg" alt="404 Monkey Pic" />
          <div>
            Photo by <a href="https://unsplash.com/es/@haughters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moghadeam Khamesh</a> on <a href="https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404