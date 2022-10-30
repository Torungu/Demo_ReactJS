import React, { Component } from 'react'

export default class extends Component {
    render() {
        /* PROPS vs STATE
        Giống: thuộc tính có sẵn, dùng binhding data trên HTML
        Khác: state có thể gán lại giá trị đc thông qua setState()
        còn props không gán lại giá trị được
        */


        const { img, name, id, price } = this.props.prod
        return (
            <div className='card'>
                <img src={img} />
                <div className="card-body bg-dark text-white">
                    <h3>{name}</h3>
                    <p>{price} $</p>
                    {this.props.tagButton}
                </div>
            </div>
        )
    }
}
