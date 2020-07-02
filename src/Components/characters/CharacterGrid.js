import React, { Component } from 'react'
import CharacterItem from './CharacterItem'

class CharacterGrid extends Component {
    render() {
        return (
            (this.props.isLoading ? 
                (
                    <h1>Loading.....</h1>
                ):
                (
                    <section className="cards">
                        {this.props.items.map((item) => (
                            <CharacterItem key={item.char_id} item={item}></CharacterItem>
                        ))}
                    </section>
                )
            )
        )
    }
}

export default CharacterGrid
