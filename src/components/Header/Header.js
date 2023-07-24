import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row flex-md-row flex-column-reverse">
                <div className="col-12 col-md-6">
                    <h5>WELCOME</h5>
                    <h1>Lorem ipsum dolor sit amet consectetur </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <a href="#" className='btn btn-light'>Explore</a>
                </div>
                <div className="col-12 col-md-6 mb-5 mb-md-0">
                    <img src="./images/header-img.svg" alt="" className='w-100' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header