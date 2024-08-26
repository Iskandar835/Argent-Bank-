import PropTypes from 'prop-types';


function FeatureItem ({ cover, title, content}) {
    return (
        <div className='feature-item'>
            <img className='feature-icon' src={cover} alt="Feature icon" />
            <h3 className='feature-item-title'>{title}</h3>
            <p>{content}</p>
        </div>
    )
};

FeatureItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
};

export default FeatureItem;