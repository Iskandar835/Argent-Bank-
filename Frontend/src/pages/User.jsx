import { useSelector } from "react-redux";
import { useState } from "react";
import AllAccounts from "../components/AllAcounts";
import FormEditUser from "../components/FormEditUser";
import Button from "../components/Button";


function User() {
    const [editName, setEditName] = useState(false);
    const user = useSelector((state) => state.postReducer.body.user);

    const openForm = () => {
        setEditName(true)
    };

    const closeForm = () => {
        setEditName(false)
    };

    return (
        <main className="main bg-dark">
            {!editName ? (
                <div className="header">
                    <h1>Welcome back<br />{user?.userName}!</h1>
                    <Button className="edit-button" title="Edit Name" onClick={openForm} />
                </div>
            ) : (
                <>
                    <div className="header">
                        <h1>Edit user info</h1>
                    </div>
                    <FormEditUser cancelClick={closeForm}/>
                </>
            )}
            <h2 className="sr-only">Accounts</h2>
            <AllAccounts />
        </main>
    );
};

export default User;