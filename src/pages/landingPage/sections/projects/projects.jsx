/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './projects.css'
import achievements from './achievements.json'

import { useRef, useEffect } from 'react'

const Projects = ({
	title = "Nuestros Proyectos",
	subtitle = "Una fina Selección de los proyectos realizados 🔖"
}) => {
	const tabRef = useRef(document.getElementById('portfolio-filter'))
	useEffect(() => {
		tabRef.current.childNodes.forEach((child, _, siblings) => {
			child.addEventListener('click', () => {
				siblings.forEach(sibling => sibling.classList.remove('active'))
				child.classList.add('active')
			})
		})
	}, [])

	return <>
		<div id="portfolio" className="section">
			{/* <!-- heading --> */}
			<div className="container section-heading text-center" data-animated="fadeInDown">
				<h2 className="title shadow-text"><span style={{ background: 'none', color: 'white' }}>{title}</span></h2>
				<p className="subtitle shadow-text">{subtitle}</p>
			</div>
			{/* <!-- end heading --> */}
			{/* <!-- Filter --> */}
			<ul id="portfolio-filter" className="list-inline" ref={tabRef}>
				<li className="active"><a href="#" data-filter="*">All</a></li>
				<li><a href="#" data-filter=".development">Web Dev</a></li>
				<li><a href="#" data-filter=".design">Design</a></li>
				<li><a href="#" data-filter=".marketing">Marketing</a></li>
			</ul>
			{/* <!-- end filter --> */}
			<div className="thumbnails">
				{achievements.map((achievement, index) => {
					if (index % 2 === 0) return null
					return <a key={index} href="#"><img src={achievement.src} alt="#" loading="lazy" /></a>
				})}
			</div>
		</div>
		{/* <!-- end projects --> */}
	</>
}

export default Projects