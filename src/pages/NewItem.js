import React, { Component } from 'react'

class NewItem extends Component {
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
export default connect(mapStateToProps)(NewItem);
