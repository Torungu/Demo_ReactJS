import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { name, age } = this.props;//Nếu nêu thì ko cần viết this.props.name
        return (
            //this.props: dùng nhận giá trị từ component cha truyền vào (đây là thuộc tính có sẵn). props không gán giá trị mới đc
            < div className='card' >
                <img src='https://i.pravatar.cc?u=' />
                <div className="card-body">
                    <h3>{name}</h3>
                    <p>Age: {age}</p>
                </div>
            </div >
        )
    }
}
