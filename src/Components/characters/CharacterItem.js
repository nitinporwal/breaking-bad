import React, { Component } from 'react'

class CharacterItem extends Component {
    render() {
        // console.log(this.props.item);
        return (
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={this.props.item.img} alt={this.props.item.portrayed} />
                    </div>
                    <div className='card-back'>
                        <h1>{this.props.item.name}</h1>
                        <ul>
                            <li>
                                <strong>Actor Name:</strong> {this.props.item.portrayed}
                            </li>
                            <li>
                                <strong>Nickname:</strong> {this.props.item.nickname}
                            </li>
                            <li>
                                <strong>Birthday:</strong> {this.props.item.birthday}
                            </li>
                            <li>
                                <strong>Status:</strong> {this.props.item.status}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterItem;
