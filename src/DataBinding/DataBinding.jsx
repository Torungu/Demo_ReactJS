import React, { Component } from 'react'

export default class DataBinding extends Component {

    tong2so = (a, b) => {
        //Dữ liệu return ko thể ra object hoặc array
        return a + b;
    }

    renderProduct() {//Lưu ý trong return ko xuống dòng
        return <div className='card'>
            <img src="https://picsum.photos/200/200" alt="" />
            <div className="card-body">
                <h3>Product Name</h3>
                <p>Price</p>
                <button className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    }

    render() {//Phần biến viết ở đây
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
