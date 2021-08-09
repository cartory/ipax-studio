import './home.css'

import IphoneX from '../../../../components/iphonex/iphone'
import ButtonBadge from '../../../../components/buttonBadge/buttonBadge'

const Home = ({
    title = "nuevo modelo de negocio en bolivia",
    subtitle = "Realidad aumentada y asesoría tecnológica para tu marca, empresa, producto o servicio"
}) => {
    return (
        <div id="home" className="grid-center">
            <div className="info animate-bottom">
                <div className="section-heading text-center" data-animated="fadeInDown">
                    <h1 className="title shadow-text">
                        <span style={{ background: 'transparent', color: 'white' }}>{title}</span>
                    </h1>
                    <p className="subtitle shadow-text">{` ${subtitle} `}</p><br />
                </div>
                {/* <IphoneX /> */}
                <div
                    style={{
                        display: "flex", flexWrap: "wrap",
                        alignItems: "center", justifyContent: 'center',
                    }}
                >
                    {/* <IphoneX /> */}
                    <img className="logo-home" src={require('./ipax-logo.png').default} alt="#" loading="lazy" />
                    <ButtonBadge platform="ios" />
                    <ButtonBadge platform="android" />
                </div>
                {/* <a className="btn btn-default btn-footer footer-cta-a shadow-text-green" href={`mailto:${'businessEmail'}`}>Comencemos</a> */}
            </div>
        </div >
    )
}

export default Home