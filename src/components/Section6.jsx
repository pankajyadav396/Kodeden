import React from 'react'
import Commonbtn from '../common/Commonbtn'
import img from '../assets/images/png/logo.png'

const Section6 = () => {
    return (
        <>
            <div className=' mt-5 pt-5'>
                <div className=' container max-w-1140 mt-md-5 pt-lg-5'>
                    <div className=' row align-items-center justify-content-around flex-column-reverse flex-md-row'>
                        <div className="col-md-6">
                            <h2 className=' color-lightwhite fs-2xl fw-medium ff-jost lh-68 text-center text-md-start'>Our Guarantee</h2>
                            <p className=' color-grey2 ff-jost lh-41 fs-md3 text-center text-md-start'>If you decide coding isn’t right for you within 15 days of starting the program, we’ll give you your money back. </p>
                            <p className=' color-gradient ff-jost fs-sm fw-normal mb-5 text-center text-md-start'>I want to become a software engineer in 6 months!</p>
                            <div className='text-center text-md-start'><Commonbtn /></div>
                        </div>
                        <div className="col-md-5 text-center mb-5 mb-md-0">
                            <img src={img} alt="img" className=' w-100 max-w-389' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6