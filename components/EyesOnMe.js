import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super(),

    this.forFocus = this.forFocus.bind(this)
    this.forBlur = this.forBlur.bind(this)
  }

  forFocus(){
    console.log('Good!')
  }

  forBlur(){
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <button onFocus={this.forFocus} onBlur={this.forBlur}>A button!</button>
    )
  }
}


module.exports = EyesOnMe;
