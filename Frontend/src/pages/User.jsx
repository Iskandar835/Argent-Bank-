import AllAccounts from "../components/AllAcounts";
import Username from "../components/Username";
import { useSelector } from "react-redux";


function User () {
    const user = useSelector((state) => state.postReducer.body.user)

    return (
        <main className="main bg-dark">
            {user && (
                <Username name={user.userName}/>
            )}
            <h2 className="sr-only">Accounts</h2>
            <AllAccounts />
        </main>
    )
};

export default User;