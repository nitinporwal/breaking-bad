import React, { Component } from 'react'

class CharacterItem extends Component {
    render() {
        console.log(this.props.item);
        return (
            <div>
                {this.props.item.name}
            </div>
        )
    }
}

export default CharacterItem
