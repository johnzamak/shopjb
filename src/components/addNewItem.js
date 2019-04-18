import React, { Component } from 'react'

class addNewItem extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
function mapStateToProps(state) {
    console.log(state)
    return state
}
export default connect(mapStateToProps)(addNewItem);