import { SIGN_IN } from "../actions/post.action";


const initialState = {
    status: null,
    message: '',
    body: localStorage.getItem('token') ? { token: localStorage.getItem('token') } : {}
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN: 
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                body: action.payload.body,
                token: action.payload.body.token
            };
        default:
            return state;
    } 
};