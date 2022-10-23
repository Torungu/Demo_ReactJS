import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('Say Hi')
    }

    render() {
        return (
            <div className="container">
                <button className="btn btn-dark" onClick={this.handleClick}>Print</button>
                <input id="text" className="w-25 form-control" onKeyUp={(e) => {
                    let tagInput = e.target;//DOM vô id="text"
                    console.log(tagInput.value)
                }} />
            </div>
        )
    }
}
