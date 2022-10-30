import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { prodDetail } = this.props;
        //bs5-modal-default
        return (
            <div>
                <div>
                    {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                        Launch
                    </button> */}
                    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">{prodDetail.name} </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <img src={prodDetail.img} className='w-100' />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
