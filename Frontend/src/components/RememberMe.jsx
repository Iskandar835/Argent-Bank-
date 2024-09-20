import PropTypes from 'prop-types';


function Remember ({ onChange, isChecked }) {
    return (
        <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={onChange} checked={isChecked}/>
            <label htmlFor="remember-me">Remember me</label>
        </div>
    )
};

Remember.propTypes = {
    onChange: PropTypes.func,
    isChecked: PropTypes.bool
};

export default Remember;