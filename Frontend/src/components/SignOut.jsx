// import { useState } from "react"
// import { useSelector } from "react-redux";

function SignOut() {
// const [button, setButton] = useState(false);

// const token = useSelector((state) => state.postReducer[0]?.body?.token);
const token = localStorage.setItem("token")

const deleteToken = localStorage.removeItem("token")

// if (token) {
//     setButton(true)
// } else {
//     setButton(false)
// }

    return (
        <>
        {token ? (
            <>
            

            <a className="main-nav-item" href="/"  onClick={deleteToken}>
                Sign out
            </a>
          
            </>
            
        ) : (
            <>
            <a className="main-nav-item" href="/signin">
                Sign in
            </a>
            
            </>
        )}

        </>
    )
}

export default SignOut

















