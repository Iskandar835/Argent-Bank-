import { useSelector } from "react-redux";


function ConnectButton() {
    const token = useSelector((state) => state.postReducer.body?.token)
    
    const handleSignOut = () => {
        localStorage.removeItem("token")
    }

    return (
        <>
            {token ? (
                <a className="main-nav-item" href="/" onClick={handleSignOut}>
                    Sign out
                </a>
            ) : (
                <a className="main-nav-item" href="/signin">
                    Sign in
                </a>
            )}
        </>
    )
};

export default ConnectButton;