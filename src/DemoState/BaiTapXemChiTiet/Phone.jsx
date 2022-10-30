import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        const { phone, Detail } = this.props;
        return (
            <div className="card">
                <img src={phone.hinhAnh} className='w-100' height={450} style={{ objectFit: 'cover' }} />
                <h3>{phone.tenSP}</h3>
                <p>{phone.giaBan}</p>
                <button className="btn btn-success" onClick={() => { Detail(phone) }}>Details</button>
            </div>
        )
    }
}
