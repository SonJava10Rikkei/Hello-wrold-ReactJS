import React, { Component } from 'react'

export default class ChildClass extends Component {
    render() {
        return (
            <div>
                <p>{this.props.studentName}:{this.props.children}</p>
            </div>
        )
    }
}