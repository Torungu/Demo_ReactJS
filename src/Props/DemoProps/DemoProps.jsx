import React, { Component } from 'react'
import Card from './Card'
import Car from './Car'

const arrProduct = [
    { id: 1, name: 'red car', img: './img/red-car.jpg', price: 1000 },
    { id: 2, name: 'black car', img: './img/black-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'steel car', img: './img/steel-car.jpg', price: 4000 }
]

export default class DemoProps extends Component {
    renderCar = () => {//props khi là 1 mảng
        return arrProduct.map((car, index) => {
            return <div className="col-3 mt-2" key='index'>
                <Car prod={car} tagButton={<button className='btn btn-success'>Add to cart</button>} />
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <h3>Demo props</h3>
                <div className="d-flex justify-content-center">
                    <div className="w-25">
                        <Card name='Hải' age='32' />
                    </div>
                    <div className="w-25">
                        <Card name="Sang" age='35' />
                    </div>
                    <div className="w-25">
                        <Card name='Thiên' age='26' />
                    </div>
                </div>
                <hr />
                <h3 className="text-center mt-2">Car List</h3>
                <div className="row mt-2">
                    {this.renderCar()}
                </div>
            </div>
        )
    }
}
