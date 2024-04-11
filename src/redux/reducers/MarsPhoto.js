import {
    SET_MARSPHOTO
} from '../types';


const initialState = {
    infoPhoto: null
}

export default function  (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_MARSPHOTO:
            return{
                ...state,
                infoPhoto:payload,
            }
        default:
            return state
    }
}