import { useSelector } from "react-redux";


function UserInHeader () {
    const token = useSelector((state) => state.postReducer.body.token);
    const user = useSelector((state) => state.postReducer.body.user);

    return (
        <>
            {token !== null && (
                <a className="main-nav-item" href="/user"><i className="fa fa-user-circle main-nav-icon"></i>{user.userName}</a>
            )}
        </>
    )
};

export default UserInHeader;