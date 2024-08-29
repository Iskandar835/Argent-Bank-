import AllAccounts from "../components/AllAcounts";
import Username from "../components/Username";


function User () {
    return (
        <main className="main bg-dark">
            <Username />
            <h2 className="sr-only">Accounts</h2>
            <AllAccounts />
        </main>
    )
};

export default User;