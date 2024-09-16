import PropTypes from 'prop-types';


function Button ({ className, onClick, title }) {
    return (
        <>
            <button 
            className={className}
            onClick={onClick}
            >{title}</button>
        </>
    )
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
};

export default Button; 