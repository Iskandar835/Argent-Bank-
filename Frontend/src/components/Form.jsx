import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../actions/post.action";
import { getUser } from "../actions/post.action";
import Field from "../components/Field";
import Remember from "./Remenber";
import Button from "./Button";


function Form () {
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirection = () => {
        setTimeout(() => {
            navigate("/user")
            dispatch(getUser())
        }, 1000)
    };
    
    const handleForm = (e) => {
        e.preventDefault()
            const postData = {
                email: form.current[0].value,
                password: form.current[1].value
            }
            dispatch(signIn(postData))
            form.current.reset()
            redirection()
        };
    
    return (
        <form ref={form} onSubmit={e => handleForm(e)}>
            <Field For={"username"} content={"Username"} type={"email"} id={"username"} required={"required"}/>
            <Field For={"password"} content={"Password"} type={"password"} id={"password"} required={"required"}/>
            <Remember />
            <Button className={"sign-in-button"} title={"Sign In"} />
        </form>
    )
};

export default Form;