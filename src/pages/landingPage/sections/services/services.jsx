import './services.css'

import services from './services.json'
import Hexagon from '../../../../components/hexagon/hexagon'

const Services = ({ title }) => {
    return <>
        <div>
            <h1>{title ?? 'Our Services'}</h1>
            <div className="grid">
                {services.map((service, index) => {
                    return <Hexagon
                        key={index}
                        side={150}
                        {...service}
                    />
                })}
            </div>
        </div>
    </>
}

export default Services