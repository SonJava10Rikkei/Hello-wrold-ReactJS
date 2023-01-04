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
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
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

