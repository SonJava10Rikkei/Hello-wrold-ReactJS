import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudents';
import Form from './components/From';
import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Danh Sơn",
          age: 29, sex: true,
          birthDate: "13/11/1993",
          address: "Hà Nội"
        },
        {
          studentId: "SV002",
          studentName: "Lê Tùng Dương",
          age: 21, sex: true,
          birthDate: "20/4/2001",
          address: "Đà Nẵng"
        },
        {
          studentId: "SV003",
          studentName: "Phùng thị Minh",
          age: 18, sex: false,
          birthDate: "05/11/2004",
          address: "TP HCM"
        },
      ],
      searchData: "",
      sortDir: "",
      sortBy: "",
    }
  }
  handleToggle = (status) => {

    // console.log(status);
    // Xử lý dữ liệu truyền từ components Control lên App
    //bật Form
    this.setState({
      isToggle: status,

    })
  }

  handleSearch = (searchData) => {
    // Nhận dữ liệu từ searchData từ Control và thực hiện search Rồi lưu vào state APP
    this.setState({
      searchData: searchData,   // searchData trái là dữ liệu của App component searchData phải là tham số trên của handleSearch

    })
  }
  handleSort = (sortDir, sortBy) => {
    // lưu vào trong state APP
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy,
    })
  }

  render() {
    // Thực hiện search (thay đổi dữ liệu của students)
    let students = [];
    if (this.state.searchData != "") {
      this.state.students.forEach(st => {
        if (st.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          students.push(st)
        }
      })
    } else {
      students = [...this.state.students];
    }
    // Thực hiện sort trên mảng student
    if (this.state.sortDir != "") {
      if (this.state.sortDir == "studentName") {
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0)
        } else {
          // sortBy = "DESC"
          students.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0)
        }
      } else {
        // sortDir = age
        if (this.state.sortBy == "ASC") {
          // students.sort((a, b) => (a.age > b.age) ? 1 : (a.age < b.age) ? -1 : 0)
          students.sort((a, b) => (a.age - b.age))
        } else {
          // sortBy = "DESC"
          // students.sort((a, b) => (a.age > b.age) ? -1 : (a.age < b.age) ? 1 : 0)
          students.sort((a, b) => (b.age - a.age))
        }
      }
    }
    let elementForm;
    if (this.state.isToggle) {
      console.log(this.state.isToggle);
      elementForm = <Form propToggle={this.handleToggle}></Form>;
    } else {
      elementForm = "";
    }
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            {/*B1. Truyền props có tên là propsToggle = handleToggle */}
            <Control propToggle={this.handleToggle} handleSearchProp={this.handleSearch} handleSortProp={this.handleSort}></Control>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent propToggle={this.handleToggle} students={students}></ListStudent>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM */}
        {elementForm}
        {/* END FORM */}
      </div>
    );
  }
}
export default App;
