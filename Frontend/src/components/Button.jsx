import PropTypes from 'prop-types';


function Button ({ className, type, onClick, title }) {
    return (
        <>
            <button className={className} onClick={onClick} type={type}>{title}</button>
        </>
    )
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    title: PropTypes.string
};

export default Button; 