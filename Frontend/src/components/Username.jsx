import PropTypes from 'prop-types';
import Button from "./Button";


function Username ({ name }) {
    return (
        <div className="header">
            <h1>Welcome back<br />{name} !</h1>
            <Button className={"edit-button"} title={"Edit Name"}/>
        </div>
    )
};

Username.propTypes = {
    name: PropTypes.string
};

export default Username;