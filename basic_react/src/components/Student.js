import React, { Component } from 'react'

export default class Student extends Component {
    handleUpdate = () => {
        this.props.studentPropToggle(true)
    }
    render() {
        let { stInfo } = this.props;
        return (
            <>
                <tr>
                    <td>{this.props.stt + 1}</td>
                    <td>{stInfo.studentId}</td>
                    <td>{stInfo.studentName}</td>
                    <td>{stInfo.age}</td>
                    <td>{stInfo.sex ? "Nam" : "Nữ"}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={this.handleUpdate}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                onClick={this.handleUpdate}
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>

        )
    }
}


