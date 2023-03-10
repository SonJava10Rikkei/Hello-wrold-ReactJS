import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
      students: [
        { id: 1, studentId: "SV001", studentName: "Nguyễn Danh Sơn", age: 29, sex: true, birthDate: "1993-11-13", birthPlace: "HN", address: "Hà Nội" },
        { id: 2, studentId: "SV002", studentName: "Vương Đắc Dũng", age: 22, sex: true, birthDate: "2001-05-01", birthPlace: "HCM", address: "Hồ Chí Minh" },
        { id: 3, studentId: "SV003", studentName: "Phùng thị Minh", age: 18, sex: false, birthDate: "2004-11-05", birthPlace: "ĐN", address: "Đà Nẵng" }
      ],
      searchData: "",
      sortDir: "",
      sortBy: "",
      selectedStudent: {},
      actionName: ""
    }
  }
  handleActionAndToggle = (status, actionName, studentInfo) => {
    // Xử lý dữ liệu truyền từ Control --> App
    // bật Form     
    this.setState({
      isToggle: status,
      actionName: actionName,
      selectedStudent: studentInfo
    });

  }
  viewListStudentsApp = (status, actionName, selectedStudent) => {
    this.setState({
      isToggle: status,
    })
  }
  handleSearch = (searchData) => {
    //Nhận dữ liệu searchData từ Control và lưu vào state
    this.setState({
      searchData: searchData
    })
  }
  handleSort = (sortDir, sortBy) => {
    //Lưu vào trong state
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy

    })
  }
  handleCreate = (isToggle, newStudent) => {
    //Xử lý thêm mới sinh viên
    this.setState({
      isToggle: isToggle
    });
    //Thêm sinh viên vào this.state.students
    this.state.students.push(newStudent);
  }
  handleUpdate = (isToggle, studentUpdate) => {
    //Thực hiện update
    let students = this.state.students.map((st) => {
      if (st.studentId == studentUpdate.studentId) {
        return studentUpdate;
      } else {
        return st;
      }
    })
    this.setState({
      isToggle: false,
      students: students
    });
  }
  deleteStudentAppId = (idOfStudent) => {
    let newStudents = this.state.students.filter((students) => {
      return idOfStudent != students.id;
    })
    this.setState({
      students: newStudents
    })
  }
  // viewListStudentsApp = () => {

  // }

  render() {
    //Thực hiện search
    let students = [];
    if (this.state.searchData != "") {
      this.state.students.forEach(st => {
        if (st.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          students.push(st);
        }
      });
    } else {
      students = [...this.state.students];
    }
    //thực hiện sort
    if (this.state.sortDir != "") {
      if (this.state.sortDir == "studentName") {
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
        } else {
          //sortBy = DESC
          students.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);
        }
      } else {
        //sortDir = age
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) => (a.age - b.age));
        } else {
          // sortBy=DESC
          students.sort((a, b) => (b.age - a.age));
        }
      }
    }
    let elementForm;
    if (this.state.isToggle) {
      elementForm = <Form selectedStudent={this.state.selectedStudent} actionName={this.state.actionName} handleCreateProp={this.handleCreate} handleUpdateProp={this.handleUpdate}></Form>;
    } else {
      elementForm = "";
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              {/* B1. Truyền props có tên propToggle = handleToggle */}
              <Control actionAndToggleProp={this.handleActionAndToggle} handleSearchProp={this.handleSearch} handleSortProp={this.handleSort}></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent actionAndToggle={this.handleActionAndToggle} students={students} deleteStudentApp={this.deleteStudentAppId} viewListStudentsProps={this.viewListStudentsApp}></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
          {/* END FORM SINH VIÊN */}
        </div>

      </div>
    );
  }
}

export default App;
