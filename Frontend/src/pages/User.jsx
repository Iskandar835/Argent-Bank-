import { useState } from "react";
import { useSelector } from "react-redux";
import AllAccounts from "../components/AllAcounts";
import FormEditUser from "../components/FormEditUser";
import Button from "../components/Button";


function User () {
    const [editUser, setEditUser] = useState(true);
    const [formOpened, setFormOpened] = useState(true);
    const user = useSelector((state) => state.postReducer.body.user);

    const openForm = ()=>{
        setEditUser(!editUser)
        setFormOpened(!formOpened) 
    };

    const closeForm = () => {
        setTimeout(() => {
            setEditUser(true)
            setFormOpened(true)
        }, 100) 
    };
    
    return (
        <main className="main bg-dark">
            {editUser && (
                <div className="header">
                    <h1>Welcome back<br />{user?.userName} !</h1>
                    <Button className={"edit-button"} title={"Edit Name"} onClick={openForm}/>
                </div>
            )}
            {!formOpened && (
                <>  
                    <div className="header">
                        <h1>Edit user info</h1>
                    </div>
                    <section className="sign-in-content form-edit">
                        <FormEditUser clickSave={closeForm} clickCancel={closeForm}/>
                    </section>
                </>
            )}
            <h2 className="sr-only">Accounts</h2>
            <AllAccounts />
        </main>
    )
};

export default User;