import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super(),

    this.typestuff = this.typestuff.bind(this)
  }

  typestuff(){
    console.log('Entering password...')
  }
  render() {
    return(
      <input onKeyUp={this.typestuff} type="password" />
    )
  }
}


module.exports = Keypad;
