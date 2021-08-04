import Blog from './sections/blog/blog'
import Footer from './sections/footer/footer'
import Clients from './sections/clients/clients.jsx'
import Projects from './sections/projects/projects'
import Services from './sections/services/services.jsx'

import Stars from '../../components/stars/stars'

const sections = [
    <Services />,
    <Projects />,
    <Blog />,
    <Clients />,
    <Footer />
]

const LandingPage = () => {
    return <>
        {sections.map((section, index) => {
            return <>
                {index % 2 === 0 ? <Stars /> : null}
                {section}
            </>
        })}
    </>
}

export default LandingPage
