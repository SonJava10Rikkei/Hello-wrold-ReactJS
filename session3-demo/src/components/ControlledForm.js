import React, { Component } from 'react';

class ControlledForm extends Component {
    constructor() {
        super();
        this.state = {
            studentId: '',
            birthDate: '',
            sex: false,
            class: '',
        }
    }
    hanldeSubmit = (e) => {
        console.log("State:", this.state);
        e.preventDefault();
    }
    hanldeChange = (event) => {
        let name = event.target.name; // name của ô input
        let value = event.target.value; // value của ô input
        this.setState({ [name]: value });   // name của ô input và value của nó

    }
    render() {
        return (
            <div>
                <form onSubmit={this.hanldeSubmit}>
                    StudentId:<input type="text" name='studentId' onChange={this.hanldeChange} /> <br />
                    BirthDate:<input type={"date"} name='birthDate' onChange={this.hanldeChange} /><br />
                    Sex:<input type={"radio"} name='sex' id='male' value={true} onChange={this.hanldeChange} /><label htmlFor='male'>Male</label>
                    <input type={"radio"} name='sex' id='feale' value={false} onChange={this.hanldeChange} /><label htmlFor='female'>Male</label> <br />
                    Class: <select onChange={this.hanldeChange} name="class">
                        <option>Chọn lớp</option>
                        <option>Lớp-8</option>
                        <option>Lớp-10</option>
                        <option>Lớp-11</option>
                    </select>
                    <input type={"submit"} value="Submit" />
                </form>
            </div>
        );
    }
}
export default ControlledForm;