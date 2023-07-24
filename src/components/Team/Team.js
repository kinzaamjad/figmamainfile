import React from 'react'
import './Team.css'

const Team = () => {
    return (
        <section id='team' className='my-5'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="text-section">
                        <h5>team</h5>
                        <h1>Our Talents</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit.</p>
                    </div>
                </div>

                <div class="row row-cols-4 g-5 mt-1 mb-5">
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="./images/Peg Legge.svg" class="w-100"
                                alt="Hollywood Sign on The Hill" />
                            <div class="card-body">
                                <h5 class="card-title">Peg Legge</h5>
                                <p class="card-text">
                                    CEO
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="./images/Richard Guerra.svg" class="w-100"
                                alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">Richard Guerra</h5>
                                <p class="card-text">
                                   CTO
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="./images/Alexandra Stolz.svg" class="w-100"
                                alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Alexandra Stolz</h5>
                                <p class="card-text">DESIGNER</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="./images/Janet Bray.svg" class="w-100"
                                alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Janet Bray</h5>
                                <p class="card-text">DEVELOPER</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <a href="#" className='btn btn-dark'>View Team</a>

                </div>
            </div>
        </section>
    )
}

export default Team