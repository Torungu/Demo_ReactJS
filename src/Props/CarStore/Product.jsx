import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { car, viewDetail } = this.props
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={car.img} alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{car.name}</h4>
                    <p className="card-text">{car.price}</p>
                    <button className="btn btn-success" data-bs-toggle='modal' data-bs-target='#modalId' onClick={() => viewDetail(car)}>View Details</button>
                </div>
            </div>
        )
    }
}
