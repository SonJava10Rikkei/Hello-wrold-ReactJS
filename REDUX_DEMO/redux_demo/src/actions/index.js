// Định nghĩa các action
import actionType from "../constant/actionType"
import { ACT_RANDOM_TYPE } from "../constant/actionType"
export const act_up = (value) => {
    return {
        type: actionType.ACT_UP_TYPE, // thuoc tinh
        payload: value
    }
}
export const act_down = (value) => {
    return {
        type: actionType.ACT_DOWN_TYPE,
        payload: value
    }
}

export const act_random = () => {
    return {
        type: ACT_RANDOM_TYPE,
    }
}