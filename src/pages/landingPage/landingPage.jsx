import Blog from './sections/blog/blog'
import Footer from './sections/footer/footer'
import Clients from './sections/clients/clients.jsx'
import Projects from './sections/projects/projects'
import Services from './sections/services/services.jsx'

const LandingPage = () => {
    return <>
        <Services />
        <Projects />
        <Blog />
        <Clients />
        <Footer />
    </>
}

export default LandingPage
