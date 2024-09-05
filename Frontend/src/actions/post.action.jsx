import { Navigate } from "react-router-dom";

export const SIGN_IN = "SIGN_IN";

export const signIn = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
            const result = await response.json();
            localStorage.setItem('token', result.body.token);
            dispatch({ type: SIGN_IN, payload: result });
            <Navigate to="/user" />


        } catch (error) {
            alert("Sorry we are having a problem, please try again later");
            console.error("There was an error!", error);
        }
    };
};


export const SET_TOKEN = "SET_TOKEN";

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    };
};