import { SIGN_IN, GET_USER } from "../actions/post.action";


const initialState = {
    status: null,
    message: '',
    body: {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null
    }
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN: 
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                body: {
                    ...state.body, 
                    token: action.payload.body.token 
                }
            };
            case GET_USER:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                body: {
                    ...state.body, 
                    user: action.payload.body 
                }
            };    
        default:
            return state;
    } 
};