import React, { Component } from 'react'
import BaitapState from '../BaitapState/BaitapState';
import style from './DemoState.module.css'
export default class DemoState extends Component {

    //LƯU Ý KHÔNG THỂ CALL RENDER()
    username = "Trung";
    // logIn = false;

    //MUỐN THAY ĐỔI GÌ ĐÓ TRÊN GIAO DIỆN THÌ KÊU STATE ĐỂ CHỨA BIẾN LÀM THAY ĐỔI GIAO DIỆN HTML;(PHÂN BIỆT BIẾN TĨNH VỚI ĐỘNG)
    state = {
        logIn: false
    }

    renderLogIn = () => {
        if (this.state.logIn) {
            return <span>Hello {this.username}</span>
        }
        return <button className='btn btn-success' onClick={() => { this.handleLogIn(); }}>LogIn</button>
    }

    //THAY ĐỔI GIÁ TRỊ STATE, KHÔNG GÁN GIÁ TRỊ TRỰC TIẾP ĐƯỢC PHẢI THÔNG QUA setState({}). Giúp thay đổi biến và thay đổi HTML, đây là phương thức bất đồng bộ
    handleLogIn = () => {
        this.setState({
            logIn: true
        }, () => {
            console.log(this.state.logIn)
        })
    }

    render() {
        return (
            <div>
                <nav className="nav justify-content-start bg-dark">
                    <a className="nav-link text-light" href="#">{this.renderLogIn()}
                    </a>
                </nav>
                <p className={`${style['fs-5xl']}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit provident maxime quo reiciendis quidem numquam recusandae nemo tempora illo dicta voluptatem, iste accusamus dolorum expedita aspernatur, facilis doloribus corporis.
                </p>
                <hr />
                <h3>BÀI TẬP STATE</h3>
                <BaitapState />
            </div >
        )
    }
}
