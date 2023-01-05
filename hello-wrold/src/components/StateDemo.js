import React, { Component } from 'react'

export default class StateDemo extends Component {
    // Khởi tạo state - constructor
    constructor() {
        super();        //Gọi đến contructor của lớp Component
        this.state = {
            studentName: 'Nguyễn Văn A',
        };
    }
    handleChangeStudent = () => {
        this.setState({
            studentName: 'Nguyễn Văn B',
        })
    }
    render() {
        console.log("Render Component");
        return (
            <div>
                <p>Rikkei Academy chào mừng bạn {this.state.studentName}</p>
                {/* gọi đến dữ liệu của state */}
                <button onClick={this.handleChangeStudent}>Change Student</button>
            </div>
        )
    }
}