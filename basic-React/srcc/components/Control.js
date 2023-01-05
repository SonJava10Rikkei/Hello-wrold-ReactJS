import React, { Component } from 'react';
class Control extends Component {
    // Khởi tạo state để chứa dữ liệu input search
    constructor() {
        super();
        this.state = {
            searchData: ""
        }
    }
    handleNewStudent = () => {
        //B2. Gọi propToggle truyền từ cha xuốnG
        this.props.actionAndToggleProp(true, "CreateStudent");
    }
    handleChange = (event) => {
        //Giá trị nhập vào của ô input có tên search khi thực hiện sự kiện onchangee
        let value = event.target.value;
        //Lưu giá trị vào state có tên là searchData
        this.setState({
            searchData: value
        })
    }
    handleSearch = (event) => {
        //Thực hiện search, chuyển dữ liệu searchData sang component App
        this.props.handleSearchProp(this.state.searchData);
        event.preventDefault();
    }
    handleSort = (event) => {
        let value = event.target.value;
        let arrSort = value.split("-");
        //truyền dữ liệu lên App
        this.props.handleSortProp(arrSort[0], arrSort[1]);

    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text" onClick={this.handleNewStudent}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                name='search'
                                title="Search here" onChange={this.handleChange}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" onChange={this.handleSort}>
                            <option value=""></option>
                            <option value="studentName-ASC">Tên tăng dần</option>
                            <option value="studentName-DESC">Tên giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
export default Control;