/* eslint-disable jsx-a11y/anchor-is-valid */
import './blog.css'
import { useRef, useEffect } from 'react';

const Blog = () => {
    const datesRef = useRef(document.getElementById('dates'))
    const issueRef = useRef(document.getElementById('issues'))

    // const nextBtn = useRef(document.getElementById('next'))
    // const prevBtn = useRef(document.getElementById('prev'))

    useEffect(() => {
        const offSetCenter = .5 * datesRef.current.offsetHeight
        datesRef.current.childNodes.forEach((child, _, siblings) => {
            child.addEventListener('click', () => {
                datesRef.current.style.transform = `translateY(${offSetCenter - child.offsetTop}px)`

                siblings.forEach(sibling => sibling.style.transform = 'none')
                child.style.transform = 'scale(1.2) translateX(8px)'
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
                            <h1 className="title"><span>We've got history</span></h1>
                            <p className="subtitle">Get to know us a little bit better <br /></p>
                        </div>

                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, repudiandae ullam possimus
                            doloribus nostrum voluptates! Eius, assumenda ratione enim culpa.
                        </p>
                        <h1 className="calender"><i className="fa fa-calendar-o"></i></h1>
                    </div>
                    {/* <!-- end Timeline heading --> */}
                    {/* <!-- Timeline --> */}
                    <div className="col-md-8">
                        <div id="timeline">
                            <ul id="dates" ref={datesRef}>
                                <li><a>2007</a></li>
                                <li><a>2008</a></li>
                                <li><a>2009</a></li>
                                <li><a>2010</a></li>
                                <li><a>2011</a></li>
                                <li><a>2012</a></li>
                                <li><a>2013</a></li>
                                <li><a>2014</a></li>
                            </ul>
                            <ul id="issues" ref={issueRef}>
                                <li id="2007">
                                    <img src="images/06_timelineimg1.png" height="256" width="256" alt="" />
                                    <h1>2007</h1>
                                    <p>
                                        <strong>
                                            Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea
                                            dictumst.
                                        </strong> Nam pulvinar. Proin metus odio, aliquam eget molestie nec,
                                        gravida ut sapien.
                                    </p>
                                </li>
                                <li id="2008">
                                    <img src="images/06_timelineimg2.png" height="256" width="256" alt="" />
                                    <h1>2008</h1>
                                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea
                                        dictumst.<strong>consequat purus metus eu velit.</strong> Praesent eget neque eu
                                        eros interdum malesuada non vel leo.</p>
                                </li>
                                <li id="2009">
                                    <img src="images/06_timelineimg3.png" height="256" width="256" alt="" />
                                    <h1>2009</h1>
                                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea
                                        dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu
                                        consequat purus metus eu velit.</p>
                                </li>
                                <li id="2010">
                                    <img src="images/06_timelineimg4.png" height="256" width="256" alt="" />
                                    <h1>2010</h1>
                                    <p>Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est
                                        sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum
                                        malesuada non vel leo.</p>
                                </li>
                                <li id="2011">
                                    <img src="images/06_timelineimg5.png" height="256" width="256" alt="" />
                                    <h1>2011</h1>
                                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea
                                        dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu
                                        consequat purus metus eu velit.</p>
                                </li>
                                <li id="2012">
                                    <img src="images/06_timelineimg6.png" height="256" width="256" alt="" />
                                    <h1>2012</h1>
                                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea
                                        dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris
                                        sollicitudin venenatis sed eu odio.</p>
                                </li>
                                <li id="2013">
                                    <img src="images/06_timelineimg7.png" height="256" width="256" alt="" />
                                    <h1>2013</h1>
                                    <p>Donec semper quam scelerisque consequat purus metus eu velit. Proin metus odio,
                                        aliquam eget molestie nec, gravida ut sapien. Phasellus Praesent eget neque eu eros
                                        interdum malesuada non vel leo.</p>
                                </li>
                                <li id="present">
                                    <img src="images/06_timelineimg8.png" height="256" width="256" alt="" />
                                    <h1>present</h1>
                                    <p><strong>Donec semper quam scelerisque tortor dictum gravida.</strong> In hac
                                        habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam
                                        ultrices mauris, eu consequat purus metus eu velit.</p>
                                </li>
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