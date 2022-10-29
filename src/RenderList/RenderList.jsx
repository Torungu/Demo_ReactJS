import React, { Component } from 'react'

const arrProduct = [
    { id: 1, name: 'red car', img: './img/red-car.jpg', price: 1000 },
    { id: 2, name: 'black car', img: './img/black-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'steel car', img: './img/steel-car.jpg', price: 4000 }
]

export default class RenderList extends Component {
    renderTable = () => {//Sử dụng mảng để chứa các thẻ <tr></tr>,<td></td> để có thể return đc
        //Cách 1:
        // let output = [];
        // for (let prod of arrProduct) {//Chú ý việc xuống dòng ở let
        //     let content = <tr>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td><img src={prod.img} alt="..." width={50} height={50} /></td>
        //         <td>{prod.price}</td>
        //     </tr>
        //     output.push(content);
        // }
        // return output;


        // Cách 2: tạo 1 mảng mới bằng hàm map. Việc này sẽ cần truyền key vô selector để không báo lỗi
        let arrTr = arrProduct.map((prod, index) => {
            return <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td><img src={prod.img} alt="..." width={50} height={50} /></td>
                <td>{prod.price}</td>
            </tr>
        });
        return arrTr;
    }

    renderDiv = () => {
        let arrDiv = arrProduct.map((prod, index) => {
            return <div key={prod.id} className="col-3">
                <div className="card">
                    <img src={prod.img} />
                    <div className="card-body">
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                        <button className="btn btn-success">Add to cart</button>
                    </div>
                </div>
            </div>
        })
        return arrDiv;
    }
    render() {

        return (//return nhiều giá trị thì return nó vô mảng
            <div className="container">
                <h3>Car List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                                <td>1</td>
                                <td>red car</td>
                                <td><img src="./img/red-car.jpg" alt="..." width={50} height={50} /></td>
                                <td>1000</td>
                            </tr> */}
                        {this.renderTable()}
                    </tbody>
                </table>
                <hr />
                <h3 className="mt-2">Card Product List</h3>
                <div className="row mt-2">
                    <div className="row">
                        {this.renderDiv()}
                        {/* <div className="col-3">
                                <div className="card">
                                    <img src="./img/red-car.jpg" />
                                    <div className="card-body">
                                        <p>Product Name</p>
                                        <p>Product Price</p>
                                        <button className="btn btn-success">Add to cart</button>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
