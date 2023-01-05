import React, { Component } from 'react'

export default class EventDemo extends Component {


    // /////////////////////////// Hàm không tham số ///////////////////////////////////
    //     handleClick1(event) {
    //         alert("Button 1 was clicked")
    //     }
    //     handleClick2(event) {
    //         alert("Button 2 was clicked")
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <button onClick={this.handleClick1()}>Button1</button>
    //                 {/* không nên để ngoặc đơn khi đó lúc render sẽ gọi luôn */}
    //                 <button onClick={this.handleClick2}>Button2</button>
    //             </div>
    //         )
    //     }
    // }

    // /////////////////////////// Hàm có tham số ///////////////////////////////////
    //     handleClick1() {
    //         alert("Button 1 was clicked")
    //     }
    //     handleClick2() {
    //         alert("Button 2 was clicked")
    //     }
    //     handleClick3 = (message) => {
    //         alert(message);
    //     }
    //     handleClick4 = (message) => {
    //         alert(message);
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <button onClick={this.handleClick1()}>Button1</button>
    //                 {/* không nên để ngoặc đơn khi đó lúc render sẽ gọi luôn */}
    //                 <button onClick={this.handleClick2}>Button2</button>
    //                 <button onClick={this.handleClick3("Button 3 was clicked")}>Button3</button>
    //                 {/* Khi function đc truyền tham số cũng tự động hiện ra khi render */}
    //                 {/* Gọi hàm có tham số ---> phải gọi theo Arrow function */}
    //                 <button onClick={() => this.handleClick3("Button 4 was clicked")}>Button4</button>
    //             </div>
    //         )
    //     }
    // }


    // /////////////////////////// Hàm có sử dụng dữ liệu của props và state ///////////////////////////////////
    //     constructor() {
    //         super();
    //         this.state = {
    //             firstName: "Rikkei",
    //             lastName: "Academy",
    //         }
    //     };


    //     handleClick1() {
    //         alert("Button 1 was clicked")
    //     }
    //     handleClick2() {
    //         alert("Button 2 was clicked")
    //     }
    //     handleClick3 = (message) => {
    //         alert(message);
    //     }
    //     handleClick4 = (message) => {
    //         alert(message);
    //     }
    //     handleClick5 = () => {
    //         alert(this.state.firstName + " " + this.state.lastName);
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <button onClick={this.handleClick1()}>Button1</button>
    //                 {/* không nên để ngoặc đơn khi đó lúc render sẽ gọi luôn */}
    //                 <button onClick={this.handleClick2}>Button2</button>
    //                 <button onClick={this.handleClick3("Button 3 was clicked")}>Button3</button>
    //                 {/* Khi function đc truyền tham số cũng tự động hiện ra khi render */}
    //                 {/* Gọi hàm có tham số ---> phải gọi theo Arrow function */}
    //                 <button onClick={() => this.handleClick3("Button 4 was clicked")}>Button4</button>
    //                 <button onClick={this.handleClick5}>Button5</button>

    //             </div>
    //         )
    //     }
    // }

    //     // /////////////////////////// Hàm có sử dụng dữ liệu của props và state ///////////////////////////////////
    //     /// Gọi theo Arrow function //////////
    //     constructor() {
    //         super();
    //         this.state = {
    //             firstName: "Rikkei",
    //             lastName: "Academy",
    //         }
    //     };


    //     handleClick1() {
    //         alert("Button 1 was clicked")
    //     }
    //     handleClick2() {
    //         alert("Button 2 was clicked")
    //     }
    //     handleClick3 = (message) => {
    //         alert(message);
    //     }
    //     handleClick4 = (message) => {
    //         alert(message);
    //     }
    //     handleClick5 = () => {
    //         alert(this.state.firstName + " " + this.state.lastName);
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <button onClick={this.handleClick1()}>Button1</button>
    //                 {/* không nên để ngoặc đơn khi đó lúc render sẽ gọi luôn */}
    //                 <button onClick={this.handleClick2}>Button2</button>
    //                 <button onClick={this.handleClick3("Button 3 was clicked")}>Button3</button>
    //                 {/* Khi function đc truyền tham số cũng tự động hiện ra khi render */}
    //                 {/* Gọi hàm có tham số ---> phải gọi theo Arrow function */}
    //                 <button onClick={() => this.handleClick3("Button 4 was clicked")}>Button4</button>
    //                 <button onClick={this.handleClick5}>Button5</button>
    //                 {/* Gọi theo Arrow function sẽ không được mà chỉ nên gọi thường như trên */}
    //                 <button onClick={() => this.handleClick5}>Button6</button>

    //             </div>
    //         )
    //     }
    // }
    // /////////////////////////// Làm việc với thẻ a ///////////////////////////////////

    constructor() {
        super();
        this.state = {
            firstName: "Rikkei",
            lastName: "Academy",
        }
    };


    handleClick1() {
        alert("Button 1 was clicked")
    }
    handleClick2() {
        alert("Button 2 was clicked")
    }
    handleClick3 = (message) => {
        alert(message);
    }
    handleClick4 = (message) => {
        alert(message);
    }
    handleClick5 = () => {
        alert(this.state.firstName + " " + this.state.lastName);
    }

    // handleLink = () => {
    //     alert("Bạn sẽ chuyển sang trang website Rikkei Academy");

    // }
    handleLink = (event) => {
        alert("Bạn sẽ chuyển sang trang website Rikkei Academy");
        // Chặn sự kiện măc định
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick1()}>Button1</button>
                {/* không nên để ngoặc đơn khi đó lúc render sẽ gọi luôn */}
                <button onClick={this.handleClick2}>Button2</button>
                <button onClick={this.handleClick3("Button 3 was clicked")}>Button3</button>
                {/* Khi function đc truyền tham số cũng tự động hiện ra khi render */}
                {/* Gọi hàm có tham số ---> phải gọi theo Arrow function */}
                <button onClick={() => this.handleClick3("Button 4 was clicked")}>Button4</button>
                <button onClick={this.handleClick5}>Button5</button>
                {/* Gọi theo Arrow function sẽ không được mà chỉ nên gọi thường như trên */}
                <button onClick={() => this.handleClick5}>Button6</button>
                <a href='https://rikkei.edu.vn/' onClick={this.handleLink}>Rikkei Academy</a>
            </div>
        )
    }
}