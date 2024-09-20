import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../actions/post.action";
import { getUser } from "../actions/post.action";
import Field from "../components/Field";
import Remember from "./RememberMe";
import Button from "./Button";


function Form () {
    const form = useRef();
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    
    const handleForm = (e) => {
        e.preventDefault()
        const postData = {
            email: form.current[0].value,
            password: form.current[1].value
        }
        dispatch(signIn(postData, checked))
            form.current.reset()
            redirection()
        };
        
    const handleChekbox = (e) => {
        setChecked(e.target.checked)
    };
        
    const redirection = () => {
        setTimeout(() => {
            navigate("/user")
            dispatch(getUser(checked))
        }, 1000)
    };
    
    return (
        <form ref={form} onSubmit={e => handleForm(e)}>
            <Field For={"username"} content={"Username"} type={"email"} id={"username"} required={"required"}/>
            <Field For={"password"} content={"Password"} type={"password"} id={"password"} required={"required"}/>
            <Remember onChange={handleChekbox} isChecked={checked}/>
            <Button className={"sign-in-button"} title={"Sign In"} />
        </form>
    )
};

export default Form;