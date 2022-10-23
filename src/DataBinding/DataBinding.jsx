import React, { Component } from 'react'
//Cách viết khá giống việc nêu biến hoặc hàm
export default class DataBinding extends Component {

    product = {
        id: 1,
        name: 'Product 1',
        price: 1000,
        image: 'https://i.pravatar.cc'
    }

    tong2so = (a, b) => {
        //Dữ liệu return ko thể ra object hoặc array
        return a + b;
    }

    renderProduct = () => {//Lưu ý trong return ko xuống dòng
        return <div className='card'>
            <img src={this.product.image} />
            <div className="card-body">
                <h3>{this.product.name}</h3>
                <p>{this.product.price}</p>
                <button className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    }

    render() {
        let title = 'CyberSoft';
        return (
            <div className='container'>
                <h3>Title: {title}</h3>
                <h5>Tổng 2 số : {this.tong2so(5, 10)}</h5>
                <div className="w-25">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
