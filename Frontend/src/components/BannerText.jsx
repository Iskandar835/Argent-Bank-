import PropTypes from 'prop-types'


function BannerText ({ Subtitle1, Subtitle2, Subtitle3, Text }) {
    return (
        <>
            <p className='subtitle'>{Subtitle1}</p>
            <p className='subtitle'>{Subtitle2}</p>
            <p className='subtitle'>{Subtitle3}</p>
            <p className='text'>{Text}</p>
        </>
    )
}

BannerText.propTypes = {
    Subtitle1: PropTypes.string,
    Subtitle2: PropTypes.string,
    Subtitle3: PropTypes.string,
    Text: PropTypes.string
}

export default BannerText