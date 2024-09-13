import PropTypes from 'prop-types';


function FieldWrapper ({ For, content, type, placeholder, id, active, required }) {
    return (
        <div className='input-wrapper'>
            <label htmlFor={For}>{content}</label>
            <input type={type} placeholder={placeholder} id={id} disabled={active} required={required}/>
        </div>
    )
};

FieldWrapper.propTypes = {
    For: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    active: PropTypes.string,
    required: PropTypes.string
};

export default FieldWrapper;