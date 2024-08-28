import Field from "../components/Field";
import Remember from "./Remenber";
import Button from "./Button";


function Form () {
    return (
        <form>
            <Field For={"username"} content={"Username"} type={"text"} id={"username"}/>
            <Field For={"password"} content={"Password"} type={"password"} id={"password"}/>
            <Remember />
            <Button className={"sign-in-button"} onclick={""} title={"Sign In"}/>
        </form>
    )
};

export default Form;