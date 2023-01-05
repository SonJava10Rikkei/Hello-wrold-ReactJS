import React, { Component } from 'react'

export default class Control extends Component {
    // Khởi tạo state để chứa dữ liệu input search
    constructor() {
        super();
        this.state = {
            searchData: "",
            sortDir: "",
            sortBy: ""
        };
    }

    handleNewStudent = () => {
        // B2 Gọi propsToggle từ cha là App xuống
        // gán functions cho sự kiện thẻ cần thao tác
        this.props.propToggle(true);
    }
    handleChange = (event) => {
        let name = event.target.name;
        // Giá trị nhap vao cua o input co ten search khi thuc hien onchange
        let value = event.target.value;
        // lưu giá trị vao state có tên là searchData
        this.setState({
            searchData: value,

        });
    }

    handleSearch = (event) => {
        // thực hiện search, chuyển dữ liệu searchData sang component App
        this.props.handleSearchProp(this.state.searchData)
        event.preventDefault();
    }
    render() {
        return (
            <>
                {/* START CONTROL */}
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
                                    name="search"
                                    title="Search here" onChange={this.handleChange}
                                />
                                <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <select className="form-control">
                                <option value="">Tên tăng dần</option>
                                <option value="">ABC def</option>
                                <option value="">ABC def</option>
                                <option value="">ABC def</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* END CONTROL */}
            </>

        )
    }
}

