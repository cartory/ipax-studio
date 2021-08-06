/* eslint-disable react/jsx-no-target-blank */
import './buttonBadge.css'

import PropTypes from 'prop-types'

const badge = {
	android: {
		imgSrc: './appstoreBadge.svg',
		alt: 'Disponible en Google Play',
		href: 'https://play.google.com/store/apps/details?id=com.iPAXStudio.iPAXAR',
	},
	ios: {
		imgSrc: './playstoreBadge.svg',
		alt: 'Disponible en Google Play',
		href: 'https://apps.apple.com/bo/app/ipax-ar/id1565399959',
	}
}

const ButtonBadge = ({ platform }) => {
	return (
		<a
			target="_blank"
			className="badge-link"
			href={badge[platform].href}
		>
			<img
				className="badge-img"
				alt={badge[platform].alt}
				src={require(badge[platform].imgSrc).default}
			/>
		</a>
	);
}

ButtonBadge.propTypes = {
	platform: PropTypes.oneOfType(['android', 'ios'])
}

export default ButtonBadge;