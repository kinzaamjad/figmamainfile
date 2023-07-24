import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio' className='my-5'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="text-section">
                        <h5>Works</h5>
                        <h1>Portfolio</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-6 pb-5 pb-lg-0"><img className='w-100' src="./images/portfolio/work-1.svg" alt="" /></div>
                    <div className="col-12 col-md-6"><img className='w-100' src="./images/portfolio/work-2.svg" alt="" /></div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 pb-5 pb-lg-0"><img className='w-100' src="./images/portfolio/work-3.svg" alt="" /></div>
                    <div className="col-12 col-md-6"><img className='w-100' src="./images/portfolio/work-4.svg" alt="" /></div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 pb-5 pb-lg-0"><img className='w-100' src="./images/portfolio/work-5.svg" alt="" /></div>
                    <div className="col-12 col-md-6"><img className='w-100' src="./images/portfolio/work-6.svg" alt="" /></div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-6 pb-5 pb-lg-0"><img className='w-100' src="./images/portfolio/work-7.svg" alt="" /></div>
                    <div className="col-12 col-md-6"><img className='w-100' src="./images/portfolio/work-8.svg" alt="" /></div>
                </div>

                <div className="row justify-content-center mb-5">
                    <a href="#" className='btn btn-dark'>Learn More</a>

                </div>
            </div>
        </section>
    )
}

export default Portfolio