import { combineReducers } from 'redux'
import count from './count'
import listNumber from './listNumber'


// Tạo reducer từ count và listNumber

export const reducer = combineReducers({
    count,
    listNumber,
    
}) 