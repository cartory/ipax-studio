import './clients.css'
import 'react-multi-carousel/lib/styles.css'

import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel'

import clients from './clients.json'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Clients = ({
    title = "Clients that trust us ",
    subtitle = "Want to join the round?",
}) => {


    return (
        <div id="clients" className="section">
            <div>
                <div className="section-heading mini text-center" data-animated="fadeInDown">
                    <h4 className="title"><span>{title}</span></h4>
                    <p className="subtitle">{` ${subtitle} `}<a href="#contact">Get in touch</a></p>
                </div>

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    slidesToSlide={10}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    customTransition="all 1s ease"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {clients.map(({ name, logo }, key) => {
                        return <img className="client-img" key={key} title={name} src={logo} alt="#" />
                    })}
                </Carousel>
            </div>
        </div>
    )
}

Clients.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Clients