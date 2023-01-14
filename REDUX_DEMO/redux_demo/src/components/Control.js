import React from 'react'
import { useDispatch } from 'react-redux'
import { act_up } from '../actions'
import { act_down } from '../actions'
import { act_random } from '../actions'



export default function Control() {
    const dispatch = useDispatch();
    const handleUp = (value) => {
        dispatch(act_up(value));
    }
   
    return (
        <div>
            <button onClick={() => handleUp(3)}>UP</button>
            <button onClick={() => dispatch(act_down(2))}>DOWN</button> {/* bắn dispatch luôn*/}
            <button onClick={() => dispatch(act_random())}>RAMDOM</button>
        </div>
    )
}
