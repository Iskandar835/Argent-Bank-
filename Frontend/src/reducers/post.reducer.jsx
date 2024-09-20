import { SIGN_IN, GET_USER, CHANGE_USERNAME } from "../actions/post.action";


const initialState = {
    status: null,
    message: '',
    body: {
        user: JSON.parse(sessionStorage.getItem('user')) || JSON.parse(localStorage.getItem('user')) || {
            email: null,
            firstName: null,
            lastName: null,
            userName: null,  
            createdAt: null,
            updatedAt: null,
            id: null
        },
        token: sessionStorage.getItem('token') || localStorage.getItem('token') || null
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
                        user: {
                            ...action.payload.body  
                        }
                    }
                };
            case CHANGE_USERNAME:
                return {
                    ...state,
                    status: action.payload.status,
                    message: action.payload.message,
                    body: {
                        ...state.body, 
                        user: {
                            ...state.body.user,  
                            userName: action.payload.body.userName 
                        }
                    }
                };
            default:
            return state;
    } 
};