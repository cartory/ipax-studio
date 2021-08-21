/* eslint-disable jsx-a11y/anchor-is-valid */
import './hexagon.css'

import PropTypes from 'prop-types'

const Hexagon = ({ side = 100, icon }) => {
    let scale = navigator.appVersion.includes('Safari') ? 5 : 1
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
                className="hexagon"
                style={{
                    width: side, height: Math.sqrt(3) * side,
                    alignItems: 'center',
                    display: 'flex', justifyContent: 'center',
                }}
            >
                <img
                    src={require(`../../assets/${icon}.svg`).default}
                    alt="#"
                    style={{
                        transform: `scale(${scale}) translateY(-5.5%)`
                    }} />
            </div>
        </div>
    )
}

Hexagon.propTypes = {
    side: PropTypes.number,
    icon: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
}

export default Hexagon