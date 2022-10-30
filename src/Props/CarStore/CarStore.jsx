import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList';

const products = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
];
export default class CarStore extends Component {
    state = {
        productDetail: { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 }
    }

    viewDetail = (carClick) => {
        this.setState({
            productDetail: carClick
        })
    }

    render() {
        //Do components này thỏa 2 yếu tố để chứa state nên viết state ở đây
        return (
            <div className='container'>
                <ProductList data={products} viewDetail={this.viewDetail} />
                <Modal prodDetail={this.state.productDetail} />
            </div>
        )
    }
}
