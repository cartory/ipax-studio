import './hexagon.css'

import PropTypes from 'prop-types'

const Hexagon = ({ side = 100, icon, title }) => {
    return (
        <div
            className="hexagon"
            style={{ width: side, height: Math.sqrt(3) * side }}
        >
            <img src={icon} loading="lazy" alt="#" srcset={icon} />
            <p>{title}</p>
        </div>
    )
}

Hexagon.propTypes = {
    side: PropTypes.number,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Hexagon