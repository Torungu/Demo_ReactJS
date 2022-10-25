import React, { Component } from 'react'

export default class BaitapState extends Component {

    state = {
        fs: 20,
        // img: ''//Thêm link
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h4>Tăng giảm Font-Size</h4>
                    <p style={{ fontSize: `${this.state.fs}px` }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quia totam reiciendis porro quisquam laudantium unde nobis id iste officiis modi aliquam, facere velit non! Quasi repellendus quae expedita iste!</p>
                    <button className='btn btn-success mx-2' onClick={() => {
                        this.setState({
                            fs: this.state.fs + 5
                        })
                    }}>+</button>
                    <button className='btn btn-danger mx-2' onClick={() => {
                        this.setState({
                            fs: this.state.fs - 5
                        })
                    }}>-</button>
                    <hr />
                    {/* <div className="card w-25">
                        <img src={this.state.img} alt="" />
                        <button className='btn btn-successs' onClick={() => {
                            let randomNumber = Math.floor(Math.random() = 100);
                            let newImg = 'https://i.pravatar.cc?u=?' + randomNumber;
                            this.setState({
                                // img: newImg;
                            })

                        }}>Change</button>
                    </div> */}
                </div>
            </div>
        )
    }
}
