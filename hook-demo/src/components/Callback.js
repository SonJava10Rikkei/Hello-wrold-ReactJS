import React, { memo } from 'react'

function Callback(props) {
    console.log("component Callback được gọi");
    return (
        <div>
            <button onClick={props.handleUp}>Up</button>
        </div>
    )
}

export default memo(Callback);