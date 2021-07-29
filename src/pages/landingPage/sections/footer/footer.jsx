/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import './footer.css'
import PropTypes from 'prop-types'

const Footer = ({
    phoneNumber = "74942908",
    businessEmail = "ipaxstudio@gmail.com",
    socialNetworks = [
        ["facebook", "https://www.facebook.com/ipaxstudiosc/"],
        ["linkedin", "#"],
        ["twitter", "#"],
        ["dribbble", "#"],
        // ["flickr", "#"],
        // ["pinterest", "#"],
        ["google-plus", "#"],
    ]
}) => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-text clearfix">
                            <a className="footer-link" href={`mailto:${businessEmail}`}>{businessEmail}</a>
                            <a className="footer-link" href={`tel:+591${phoneNumber}`}>🇧🇴 {phoneNumber}</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="social social-networks-transparent">
                            {socialNetworks.map(([icon, link], index) => {
                                return <a key={index} href={link} target="_blank"> <i className={`fa fa-${icon} fa-lg`}></i> </a>
                            })}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-cta clearfix">
                            <p className="footer-p footer-cta-p">Want to work with us?</p>
                            <a className="btn btn-default btn-footer  footer-cta-a" href={`mailto:${businessEmail}`}>Get
                                Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    phoneNumber: PropTypes.string,
    personalEmail: PropTypes.string,
    socialNetworks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default Footer