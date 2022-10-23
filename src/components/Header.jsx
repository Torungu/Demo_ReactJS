//react class components( RCC)
import React, { Component } from 'react'

export default class Header extends Component {
    render() {//phương thức render: chứa giao diện html của component

        //Nội dung component phải bao phủ 1 thẻ
        return (
            <div>
                <ul classname="nav nav-tabs" id="myTab" role="tablist">
                    <li classname="nav-item" role="presentation">
                        <button classname="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                    </li>
                    <li classname="nav-item" role="presentation">
                        <button classname="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                    </li>
                    <li classname="nav-item" role="presentation">
                        <button classname="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
                    </li>
                </ul>
                <div classname="tab-content">
                    <div classname="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> home </div>
                    <div classname="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
                    <div classname="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
                </div>
            </div>

        )
    }
}

