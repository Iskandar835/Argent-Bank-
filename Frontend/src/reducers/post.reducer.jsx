import { SIGN_IN } from "../actions/post.action";
import { SET_TOKEN } from "../actions/post.action";

const initialState = { 
    token: localStorage.getItem('token') || null
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN: 
            return [action.payload];
        default:
            return state;
    } 
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
};