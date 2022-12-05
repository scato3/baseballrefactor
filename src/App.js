const Output = require('./Output')
const Input = require('./Input')
const generateNumbers = require('./generateNumbers')

class App {
  play() {
    Output.gameStart()
    Input.InputNum(generateNumbers.generate())
  }
}

const app = new App()
app.play()
module.exports = App;
