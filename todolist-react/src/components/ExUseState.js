import React, { useEffect, useState } from 'react'

export default function ExUseState() {
    // Khởi tạo giá trị state với hàm useState
    const [count, setCount] = useState(0);  // [tên củastate, update của state]  =  (initSate đối số - Giá trị khởi tạo)
    const arr = [1, 3, 5, 7, 9];
    const [list, setList] = useState(arr);
    const handleRamdom = () => {
        // Thêm vào một giá trị mới ramdom vào list
        console.log(list);
        setList([...list, parseInt(Math.random() * 10)]);
    }
    // Khởi tạo state là một đối tượng OBJECT
    const [objState, setObjState] = useState({ count: 0, list: arr });
    const handleRandomObject = () => {
        setObjState({
            count: objState.count,
            list: [...objState.list, parseInt(Math.random() * 10)]
        });
    }
    // Sử dụng useEffect //
    // 1. Sử dụng useEffect(callback) --> Đc gọi khi rander (componentDidMount) hoặc re-render (componentDidUpdated)
    useEffect(() => {
        console.log("useEffect(callback) được gọi khi render và re-render")
    });

    //2. Sử dụng useEffect(callback[]) --> 
    useEffect(() => {
        console.log("useEffect(callback[]) được gọi khi render (componentDidMount)")
    }, []);
    //3 .Sử dụng useEffect(callback[count]) -->

    useEffect(() => {
        console.log("useEffect(callback[deps]) được gọi khi render or giá trị deps thay đổi")
    }, [count, list]);


    return (
        <div>
            <h2>Rikkei Academy - React Hooks - useState</h2>
            <p> Current Value: {count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count + -1)}>Down</button>
            <p>Current Array:{list.toString()}</p>
            <button onClick={handleRamdom}>Random</button>

            <h2>OBJ - useState</h2>
            <p> Current Value: {objState.count}</p>
            <button onClick={() => setObjState({ count: objState.count + 1, list: objState.list })}>Up</button>
            <button onClick={() => setObjState({ count: objState.count - 1, list: objState.list })}>Down</button>
            <p>Current Array:{objState.list.toString()}</p>
            <button onClick={handleRandomObject}>Random</button>
        </div >
    )
}
