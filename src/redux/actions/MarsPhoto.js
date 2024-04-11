import {
    SET_MARSPHOTO
} from '../types';


export const setInfoPhoto = (infoPhoto) => dispatch => {
    dispatch({
        type: SET_MARSPHOTO,
        payload: infoPhoto
    });
}