export const SIGN_IN = "SIGN_IN";

export const signIn = (data, checked, navigate) => {
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

            if (checked) {
                localStorage.setItem("token", result.body.token);
              } else {
                sessionStorage.setItem("token", result.body.token);
              };
            
            dispatch({ type: SIGN_IN, payload: result });
            dispatch(getUser(checked))
            navigate("/user");
            
        } catch (error) {
            alert("Sorry we are having a problem, please try again later");
            console.error("There was an error!", error);
        };
    };
};

export const GET_USER = "GET_USER";

export const getUser = (checked) => {
    return async (dispatch) => {
        try {
            const token = sessionStorage.getItem("token") || localStorage.getItem("token");
            const sendToken = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            const result = await sendToken.json();
            
            if (checked) {
                localStorage.setItem("user", JSON.stringify(result.body));
              } else {
                sessionStorage.setItem("user", JSON.stringify(result.body));
              };
            
            dispatch({ type: GET_USER, payload: result});
            
        } catch (error) {
            alert("Sorry we are having a problem, please try again later");
            console.error("There was an error!", error);
        };
    };
};

export const CHANGE_USERNAME = "CHANGE_USERNAME";

export const changeUsername = (data) => {
    return async (dispatch) => {
        try {
            const token = sessionStorage.getItem("token") || localStorage.getItem("token");
            const sendData = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            const result = await sendData.json();

            if (sessionStorage.getItem("user")) {
                sessionStorage.setItem("user", JSON.stringify(result.body));
            } else if (localStorage.getItem("user")){
                localStorage.setItem("user", JSON.stringify(result.body));
            };

            dispatch({ type: CHANGE_USERNAME, payload: result });
        
        } catch (error) {
            alert("Sorry we are having a problem, please try again later");
            console.error("There was an error!", error);
        };
    };
};