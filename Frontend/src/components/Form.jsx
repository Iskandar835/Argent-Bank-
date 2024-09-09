import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../actions/post.action";
import Field from "../components/Field";
import Remember from "./Remenber";
import Button from "./Button";


function Form () {
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    
    const handleForm = (e) => {
        e.preventDefault()
            const postData = {
                email: form.current[0].value,
                password: form.current[1].value
            }
            dispatch(signIn(postData))
            form.current.reset()
        };
    
    const redirection = () => {
        if (token) {
            navigate('/user')
        }
    };

    return (
        <form ref={form} onSubmit={e => handleForm(e)}>
            <Field For={"username"} content={"Username"} type={"email"} id={"username"}/>
            <Field For={"password"} content={"Password"} type={"password"} id={"password"} />
            <Remember />
            <Button className={"sign-in-button"} onclick={redirection} title={"Sign In"} />
        </form>
    )
};

export default Form;