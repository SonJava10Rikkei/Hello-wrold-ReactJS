import React from 'react'

export default function ChildFunc(props) {
    return (
        <div>
            <p>{props.studentName}:{props.children}</p>
        </div>
    )
}
