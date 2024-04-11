import {
    SET_APODMODAL
} from '../types';


export const setApodModal = (value) => dispatch => {
    dispatch({
        type: SET_APODMODAL,
        payload: value
    });
}