import React, { Component } from 'react'
import Phone from './Phone'
const data = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2, Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/phones/vsphone.jpg"
    },
    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/phones/meizuphone.jpg"
    },
    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/phones/applephone.jpg"
    }
]

export default class BaiTapXemChiTiet extends Component {
    renderProduct = () => {
        return data.map((phone, index) => {
            return <div className="col-4" key={index}>
                {/* <div className="card">
                    <img src={phone.hinhAnh} className='w-100' height={450} style={{ objectFit: 'cover' }} />
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan}</p>
                    <button className="btn btn-success" onClick={() => { this.Detail(phone) }}>Details</button>
                </div> */}
                <Phone phone={phone} Detail={this.Detail} />
            </div>
        })
    }
    //Sử dụng state để show detail
    state = {
        spDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/phones/vsphone.jpg"
        }
    }

    //Tham số là 1 Object
    Detail = (phoneClick) => {
        this.setState({
            spDetail: phoneClick
        })
    }

    render() {
        const { tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh } = this.state.spDetail //Sử dụng bóc tách phần tử ở đây để đỡ {this.state.spDetail.keyword}
        return (
            <div className='container'>
                <h1>Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="mt-2">
                    <div className="row">
                        <div className="col-4">
                            <h3>{tenSP}</h3>
                            <img src={hinhAnh} className='w-100' height={450} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="col-8">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <th>{heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>Ram</th>
                                        <th>{ram}</th>
                                    </tr>
                                    <tr>
                                        <th>Rom</th>
                                        <th>{rom}</th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//ĐÂY LÀ CÁCH LÀM DÙNG STATE, SAU ĐÓ SE COMMENT LẠI SỬ DỤNG PROPS VÀ COMPONETS ĐỂ DỄ MAINTAINCE
