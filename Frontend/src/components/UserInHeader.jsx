import { useSelector } from "react-redux";


function UsersProfile () {
    const user = useSelector((state) => state.postReducer.body.user);

    return (
        <>
            {user && (
                <a className="main-nav-item"><i className="fa fa-user-circle main-nav-icon"></i>{user.firstName}</a>
            )}
        </>
    )
};

export default UsersProfile;