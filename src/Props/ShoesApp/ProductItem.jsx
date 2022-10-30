import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        const { name, description, price, image } = this.props.prod;
        return (
            <div className="card">
                <img src={image} />
                <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{price} $</p>
                </div>
            </div>
        )
    }
}
