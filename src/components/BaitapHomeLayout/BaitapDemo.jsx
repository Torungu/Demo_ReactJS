import React, { Component } from 'react'
import ContentHome from './ContentHome'
import NaviagtionHome from './NaviagtionHome'
import FooterHome from './FooterHome'
import HeaderHome from './HeaderHome'
export default class BaitapDemo extends Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <div className='row p-0 m-0'>
                    <div className="col-4 p-0">
                        {/* 
                         */}
                        <NaviagtionHome />
                    </div>
                    <div className="col-8 p-0" >
                        {/* <CarouselHome /> */}
                        <ContentHome />
                    </div>
                </div>
                <FooterHome />
            </div>
        )
    }
}
