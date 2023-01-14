import React from 'react'
import { useSelector } from 'react-redux'
export default function Infomation() {
  let count = useSelector(state => state.count);
  let listNumber = useSelector(state => state.listNumber);
  return (
    <div>
      <h2>React Redux demo</h2>
      <p>Current value: {count}</p>
      <p>Array: {listNumber.toString()} </p>
    </div>
  )
}
