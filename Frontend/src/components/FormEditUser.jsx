import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeUsername } from '../actions/post.action';
import FieldWrapper from "./Field";
import Button from "./Button";


function FormEditUser ({ clickSave, clickCancel }) {
    const editForm = useRef();
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault()
            const data = {
                userName: editForm.current[0].value
            }
            dispatch(changeUsername(data)) 
            editForm.current.reset()
        }; 
    
    const user = useSelector((state) => state.postReducer.body.user);
        
    return (
            <form ref={editForm} onSubmit={e => handleForm(e)}>
                <FieldWrapper For={"username"} content={"User name"} type={"text"} id={"username"}/>
                <FieldWrapper For={"firstname"} content={"First name"} type={"text"} placeholder={user?.firstName} id={"firstname"} active={"disabled"}/>
                <FieldWrapper For={"lastname"} content={"Last name"} type={"text"}  placeholder={user?.lastName} id={"lastname"} active={"disabled"}/>
                <div className="form-edit-buttons">
                    <Button className={"transaction-button"} type={"submit"} onClick={clickSave} title={"Save"}/>
                    <Button className={"transaction-button"} type={"button"} onClick={clickCancel} title={"Cancel"}/>
                </div>
            </form>
    )
};

FormEditUser.propTypes = {
    clickSave: PropTypes.func,
    clickCancel: PropTypes.func
};

export default FormEditUser;