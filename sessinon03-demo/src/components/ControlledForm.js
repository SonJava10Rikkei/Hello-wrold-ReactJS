import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor() {
        super();
        this.state = {
            studentId: '',
            birthDay: '',
            sex: false,
            
        }
    
    }

    handleSumbit = (event) => {


     }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({

            
        });

    }



  render() {
    return (
        <div>
            
      </div>
    )
  }
}
