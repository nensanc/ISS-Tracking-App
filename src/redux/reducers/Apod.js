import {
    SET_APODMODAL
} from '../types';


const initialState = {
    showApod: false
}

export default function  (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SET_APODMODAL:
            return{
                ...state,
                showApod:!state.showApod,
            }
        default:
            return state
    }
}