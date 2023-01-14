import { ACT_RANDOM_TYPE } from "../constant/actionType";
const initialState = [1, 3, 5, 7];

const listNumber = (state = initialState, action) => {
    switch (action.type) {
        case ACT_RANDOM_TYPE:
            state = [...state, parseInt(Math.random() * 10)]
            return state;
        default:
            return state
    }
}
export default listNumber;