import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    renderProduct = () => {
        const { data, viewDetail } = this.props
        return data.map((car, index) => {
            return <div className='col-3' key={index}>
                <Product car={car} viewDetail={viewDetail} />
            </div>
        })
    }
    render() {

        return (
            <div>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
