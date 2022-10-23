import React, { Component } from 'react'
import HeaderHome from './HeaderHome'
import CarouselHome from './CarouselHome'
export default class BaitapDemo extends Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <div className='row p-0 m-0'>
                    <div className="col-4">
                        <h1>Xin chào</h1>
                    </div>
                    <div className="col-8">
                        <CarouselHome />
                    </div>
                </div>
            </div>
        )
    }
}
