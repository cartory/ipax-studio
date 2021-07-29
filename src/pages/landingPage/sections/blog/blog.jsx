/* eslint-disable jsx-a11y/anchor-is-valid */
import './blog.css'
import { useRef, useEffect } from 'react';
import events from './events.json'

const Blog = ({
    title = "We've got history",
    subtitle = "Get to know us a little bit better",
    textCenter = "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
}) => {
    const datesRef = useRef(document.getElementById('dates'))
    const issueRef = useRef(document.getElementById('issues'))

    // const nextBtn = useRef(document.getElementById('next'))
    // const prevBtn = useRef(document.getElementById('prev'))

    useEffect(() => {
        const offSetCenter = .5 * datesRef.current.offsetHeight
        datesRef.current.childNodes.forEach((child, index, siblings) => {
            child.addEventListener('click', () => {
                datesRef.current.style.transform = `translateY(${offSetCenter - child.offsetTop}px)`

                siblings.forEach((sibling, i) => {
                    sibling.style.transform = 'none';
                    issueRef.current.childNodes[i].style.display = 'none'
                })

                child.style.transform = 'scale(1.2) translateX(8px)'
                issueRef.current.childNodes[index].style.display = 'list-item'
            })
        })
    }, [])

    return (
        <div id="timeline-block" className="section">
            <div className="container">
                <div className="row">
                    {/* <!-- Timeline heading --> */}
                    <div className="col-md-4 history">
                        <div className="section-heading text-center">
                            <h1 className="title"><span>{title}</span></h1>
                            <p className="subtitle">{subtitle}<br /></p>
                        </div>

                        <p className="text-center">{textCenter}</p>
                        <h1 className="calender"><i className="fa fa-calendar-o"></i></h1>
                    </div>
                    <div className="col-md-8">
                        <div id="timeline">
                            <ul id="dates" ref={datesRef}>
                                {events.map(({ year }, index) => <li key={index}><a>{year}</a></li>)}
                            </ul>
                            <ul id="issues" ref={issueRef}>
                                {events.map((event, index) => {
                                    return (
                                        <li id={event.year} key={index}>
                                            <img className="event-img" src={event.img} alt="#" />
                                            <h1>{event.year}</h1>
                                            <p><strong>{event.content}</strong></p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div id="grad_top"></div>
                            <div id="grad_bottom"></div>
                            {/* <a style={{ display: 'block' }} ref={nextBtn} href="#" id="next">+</a>
                            <a style={{ display: 'block' }} ref={prevBtn} id="prev">-</a> */}
                        </div>
                    </div>
                    {/* <!-- end Timeline --> */}
                </div>
            </div>
        </div>
    )
}

export default Blog