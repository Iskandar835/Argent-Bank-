import PropTypes from 'prop-types';


function FieldWrapper ({ For, content, type, id }) {
    return (
        <div className='input-wrapper'>
            <label htmlFor={For}>{content}</label>
            <input type={type} id={id} required/>
        </div>
    )
};

FieldWrapper.propTypes = {
    For: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string
};

export default FieldWrapper;