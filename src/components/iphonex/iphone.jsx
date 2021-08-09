import './iphonex.css'
import PropTypes from 'prop-types'

const IphoneX = ({ img, size = 1 }) => {
    return (
        <div
            className="iphone-x"
            style={{
                transform: `scale(${size})`,
                backgroundImage: `url(${img ?? require('./ipax.jpeg').default})`,
                 margin: '0 !important',
            }}
        >
            <i>speaker</i>
            <b>camera</b>
        </div>
    );
}

IphoneX.propTypes = {
    img: PropTypes.string,
    size: PropTypes.number
}

export default IphoneX