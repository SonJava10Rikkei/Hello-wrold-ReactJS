import React, { useReducer } from 'react'
// State phức tạp
/**
 *  student:{
 *      studentId,
 *      studentName,
 *      address {
 *          city,
 *          provice, ...  
 * }
 * }
 */
// 1.  Khởi tạo Reducer : State cũ - cần thay đổi, action - Hành động để thay đổi state
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            return new Error('Action invalid')

    }
};
export default function ExUseReducer() {
    // useReducer (reducer, initState) : Khai báo state vaf phương thức dispatch để action cập nhật state
        const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h2>Up Down Reducer</h2>
            <p>Clock: {count}</p>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </div>
    )
}
