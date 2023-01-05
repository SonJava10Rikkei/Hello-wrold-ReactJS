import React, { Component } from 'react'

export default class UncontroledForm extends Component {
    constructor() {
        super();
        // Khởi tạo các ref tham chiếu tới DOM
        this.bookId = React.createRef();
        this.bookName = React.createRef();
    }
    handleSubmit = (e) => {
        console.log("BookId:" + this.bookId.current.value + " - " + "BookName:" + this.bookName.current.value);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h2>UncontroledForm</h2>
                <form onSubmit={this.handleSubmit}>
                    BookId: <input type="text" name="bookId" ref={this.bookId} /> <br />
                    BookId: <input type="text" name="bookName" ref={this.bookName} /> <br />
                    <input type="submit" value="submit" /> <br />

                </form>
            </div>
        )
    }
}

// Khi mà làm gì nhảy vào ô input thì nên dùng
// còn khi lấy dữ liệu nên dùng cách 1 Controlled