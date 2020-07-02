import React, { Component } from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

class CharacterGrid extends Component {
    render() {
        return (
            (this.props.isLoading ? 
                (
                    <Spinner />
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
