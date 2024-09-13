import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import FieldWrapper from "./Field";
import Button from "./Button";


function FormEditUser ({ cancelClick, saveClick }) {
    const user = useSelector((state) => state.postReducer.body.user);
    return (
        <section className="sign-in-content form-edit">
            <form>
                <FieldWrapper For={"username"} content={"User name"} type={"text"} id={"username"}/>
                <FieldWrapper For={"firstname"} content={"First name"} type={"text"} placeholder={user?.firstName} id={"firstname"} active={"disabled"}/>
                <FieldWrapper For={"lastname"} content={"Last name"} type={"text"}  placeholder={user?.lastName} id={"lastname"} active={"disabled"}/>
                <div className="form-edit-buttons">
                    <Button className={"transaction-button"} title={"Save"} onClick={saveClick}/>
                    <Button className={"transaction-button"} title={"Cancel"} onClick={cancelClick}/>
                </div>
            </form>
        </section>
    )
};

FormEditUser.propTypes = {
    saveClick: PropTypes.func,
    cancelClick: PropTypes.func
};

export default FormEditUser;