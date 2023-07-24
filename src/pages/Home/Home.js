import React from 'react'
import Header from '../../components/Header/Header'
import Partners from '../../components/Partners/Partners'
import './Home.css'
import Team from '../../components/Team/Team'

const Home = () => {
  return (
    <>
        <Header/>
        <Partners/>
        <section id="chat" className='my-5 py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                        <img src="./images/chat.svg" alt="" className='w-100' />
                    </div>
                    <div className="col-12 col-md-6 ps-md-5 d-flex flex-column justify-content-center">
                        <h1>Lorem ipsum dolor sit amet consectetur </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <a href="#" className='btn btn-dark'>Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="login" className='my-5 pb-5'>
            <div className="container">
                <div className="row flex-md-row flex-column-reverse">
                    <div className="col-12 col-md-6 pe-5 d-flex flex-column justify-content-center">
                        <h1>Lorem ipsum dolor sit amet consectetur </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <a href="#" className='btn btn-dark'>Learn More</a>
                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                        <img src="./images/login.svg" alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </section>
        <Team/>
    </>
  )
}

export default Home