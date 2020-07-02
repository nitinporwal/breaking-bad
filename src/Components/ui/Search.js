import React, { Component } from 'react'

class Search extends Component {
    state= {
        chars: ""
    }
    handleInputChange = (event) => {
        this.setState({chars: event.target.value})
    }
    render() {
        console.log(this.state);
        return (
            <section className="search">
                <form>
                    <input className="form-control" type="text" placeholder="Search characters" value={this.state.char} onChange={(event) => this.handleInputChange(event)} autoFocus />
                </form>
            </section>
        )
    }
}

export default Search;
