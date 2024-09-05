import Field from "../components/Field";
import Remember from "./Remenber";
import Button from "./Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/post.action";


function Form () {
    const form = useRef();
    const dispatch = useDispatch();
    // const token = useSelector((state) => state.auth.token);

   
    const handleForm = (e) => {
        e.preventDefault()
            const postData = {
                email: form.current[0].value,
                password: form.current[1].value
            }
            dispatch(signIn(postData));
            form.current.reset()
            // if (token) {
            //     return <Navigate to="/user" />
            // }
        }
    
   
    
    return (
        <form ref={form} onSubmit={e => handleForm(e)}>
            <Field For={"username"} content={"Username"} type={"email"} id={"username"}/>
            <Field For={"password"} content={"Password"} type={"password"} id={"password"} />
            <Remember />
            <Button className={"sign-in-button"} title={"Sign In"} />
        </form>
    )
};

export default Form;


