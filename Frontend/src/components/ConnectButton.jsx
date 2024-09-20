import { useSelector } from "react-redux";


function ConnectButton() {
    const token = useSelector((state) => state.postReducer.body.token);
    
    const handleSignOut = () => {
        sessionStorage.removeItem("token") || localStorage.removeItem("token")
        sessionStorage.removeItem("user") || localStorage.removeItem("user")
    };

    return (
        <>
            {token ? (
                <a className="main-nav-item" href="/" onClick={handleSignOut}>
                    <i className="fa-solid fa-right-from-bracket main-nav-icon"></i>
                    Sign out
                </a>
            ) : (
                <a className="main-nav-item" href="/signin">
                    <i className="fa fa-user-circle main-nav-icon"></i>
                    Sign in
                </a>
            )}
        </>
    )
};

export default ConnectButton;