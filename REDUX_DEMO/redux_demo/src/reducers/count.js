import actionType from "../constant/actionType";
// 1. Khởi tạo giá trị init cho state
const initialState = 0;

// 2. Tạo count reducer: state và action
// => reducer có giá trị đầu vào là state và action và nó return ra newState
const count = (state = initialState, action) => {
    //2.1 dựa vào action.type để cập nhật state
    switch (action.type) {
        case actionType.ACT_UP_TYPE:
            state = state + action.payload;
            return state;
        case actionType.ACT_DOWN_TYPE:
            state -= action.payload;
            return state;
        default:
            return state; // state mới
    }
}
export default count;