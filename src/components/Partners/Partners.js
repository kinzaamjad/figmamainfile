import React from 'react'
import './Partners.css'

const Partners = () => {
    return (
        <section id='partners' className='my-5'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="text-section">
                        <h5>partners</h5>
                        <h1>Lorem Ipsum Dolor</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit.</p>
                    </div>
                </div>

                <div className="row justify-content-between my-5">
                    <div className="col-12 col-md-2 mb-5 mb-md-0 text-center text-md-start"><img className='w-100 w-auto' src="./images/google.svg" alt="" /></div>
                    <div className="col-12 col-md-2 mb-5 mb-md-0 text-center text-md-start"><img className='w-100 w-auto' src="./images/microsoft.svg" alt="" /></div>
                    <div className="col-12 col-md-2 mb-5 mb-md-0 text-center text-md-start"><img className='w-100 w-auto' src="./images/airbnb.svg" alt="" /></div>
                    <div className="col-12 col-md-2 mb-5 mb-md-0 text-center text-md-start"><img className='w-100 w-auto' src="./images/facebook.svg" alt="" /></div>
                    <div className="col-12 col-md-2 mb-5 mb-md-0 text-center text-md-start"><img className='w-100 w-auto' src="./images/spotify.svg" alt="" /></div>
                </div>

            <div className="row justify-content-center mb-5">
                <a href="#" className='btn btn-dark'>Learn More</a>
                
            </div>
            </div>
        </section>
    )
}

export default Partners