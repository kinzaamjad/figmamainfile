import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section id='contact' className='my-5'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="text-section">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit.</p>
                    </div>
                </div>

                <div className="row flex-md-row flex-column-reverse">
                    <div className="col-12 col-lg-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail" />
                            </div>
                            <div class="mb-3">
                                <label for="floatingTextarea2" className="form-label">Message</label>
                                <textarea class="form-control" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Submit</button>
                        </form>

                    </div>
                    <div className="col-12 col-lg-6 mb-sm-0 mb-4">
                        <img src="./images/map.svg" className='w-100' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact