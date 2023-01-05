import Student from "./Student";


import React, { Component } from 'react'

export default class ListStudents extends Component {
    handleToggleStudent = (status) => {
        this.props.propToggle(status);
    }
    render() {
        // Lấy props students trong đối tượng props truyền từ App sang 
        let { students } = this.props;
        let elementListStudent = students.map((st, index) => {
            return <Student key={st.studentId} studentPropToggle={this.handleToggleStudent} stInfo={st} stt={index}></Student>
        });
        return (
            <>
                {/* START LIST STUDENT */}
                <div className="card-body">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3 className="card-title">Danh sách sinh viên</h3>
                        <div className="col-4 d-flex align-items-center">
                            <select style={{ height: "45px" }} className="form-select" onChange={this.handleSort}>
                                <option value="">Sắp xếp theo</option>
                                <option value="studentName-ASC">Tên từ a-z</option>
                                <option value="studentName-DESC">Tên từ z-a</option>
                                <option value="age-ASC">Tuổi tăng dần</option>
                                <option value="age-DESC">Tuổi giảm dần</option>
                                <option value="sex-true">Nam đến nữ</option>
                                <option value="sex-false">Nữ đến Nam</option>
                                <option value="studentId-ASC">Mã SV tăng dần</option>
                                <option value="studentId-DESC">Mã SV giảm dần</option>
                            </select>
                        </div>
                    </div>

                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementListStudent}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* END LIST STUDENT */}
            </>
        )
    }
}

