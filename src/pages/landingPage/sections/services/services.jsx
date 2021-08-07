/* eslint-disable jsx-a11y/anchor-is-valid */
import './services.css'

import services from './services.json'
import Hexagon from '../../../../components/hexagon/hexagon'

const HexagonRow = ({ items = [] }) => {
    return <>
        <div className="row">
            {items.map((item, index) => {
                return (
                    <div key={index} className="col-sm-4 about-block">
                        <Hexagon icon={item.svg} side={110} />
                        <header>
                            <h3><a href="#">{item.title}</a></h3>
                        </header>
                        <p className="subtitle shadow-text" style={{ color: 'white' }}>{item.title}</p>
                    </div>
                )
            })}
        </div>
    </>
}

const Services = ({
    title = "Nuestros Servicios",
    subtitle = "Todos nuestros servicio al alcance de un click 🖱️",
}) => {
    return <>
        <div id="about" className="section">
            <div className="container">
                {/* MAIN HEADER */}
                <div className="row">
                    <div className="section-heading text-center picture" style={{ background: 'none' }} data-animated="fadeInDown">
                        <h1 className="title shadow-text"><span style={{ background: 'none', color: 'white' }}>{title}</span></h1>
                        <p className="subtitle shadow-text">{subtitle}</p>
                    </div>
                </div>
                {/*  MAIN SERVICES */}
                <div className="services">
                    <HexagonRow items={services.slice(0, services.length / 2)} />
                    <HexagonRow items={services.slice(services.length / 2)} />
                </div>
            </div>
        </div>
    </>
}

export default Services