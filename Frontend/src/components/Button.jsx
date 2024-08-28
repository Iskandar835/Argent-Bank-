import PropTypes from 'prop-types';


function Button ({ className, onclick, title }) {
    return (
        <>
            <button 
            className={className}
            onClick={onclick}
            >{title}</button>
        </>
    )
};

Button.propTypes = {
    className: PropTypes.string,
    onclick: PropTypes.func,
    title: PropTypes.string
};

export default Button; 